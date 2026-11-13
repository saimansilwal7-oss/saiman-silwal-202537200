// Load the same React components used by the local Create React App project.
// This lets the GitHub Pages preview run the real files in src/ without a separate copy.
const sourceFiles = [
  "src/data/projects.js",
  "src/components/FilterBar.js",
  "src/components/ProjectCard.js",
  "src/components/ProjectList.js",
  "src/App.js"
];

const moduleCache = new Map();
const compiledModules = new Map();

function normalizePath(path) {
  const parts = [];
  path.split("/").forEach((part) => {
    if (!part || part === ".") return;
    if (part === "..") parts.pop();
    else parts.push(part);
  });
  let result = parts.join("/");
  if (!result.endsWith(".js")) result += ".js";
  return result;
}

async function prepareModules() {
  const loaded = await Promise.all(sourceFiles.map(async (path) => {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Could not load " + path + " (" + response.status + ")");
    const source = await response.text();
    const compiled = Babel.transform(source, {
      presets: ["react"],
      plugins: ["transform-modules-commonjs"]
    }).code;
    return [path, compiled];
  }));
  loaded.forEach(([path, code]) => compiledModules.set(path, code));
}

function loadModule(path) {
  if (path === "react") return React;
  if (path === "react-dom/client") return ReactDOM;
  const normalized = normalizePath(path);
  if (moduleCache.has(normalized)) return moduleCache.get(normalized).exports;
  const code = compiledModules.get(normalized);
  if (!code) throw new Error("Module not found: " + normalized);

  const module = { exports: {} };
  moduleCache.set(normalized, module);
  const localRequire = (request) => {
    if (request.startsWith(".")) {
      const parentFolder = normalized.split("/").slice(0, -1).join("/");
      return loadModule(normalizePath(parentFolder + "/" + request));
    }
    return loadModule(request);
  };

  new Function("require", "module", "exports", code)(
    localRequire,
    module,
    module.exports
  );
  return module.exports;
}

async function startGallery() {
  const rootElement = document.getElementById("root");
  try {
    if (!window.React || !window.ReactDOM || !window.Babel) {
      throw new Error("A required library did not load. Please refresh the page.");
    }
    await prepareModules();
    const appModule = loadModule("src/App.js");
    const App = appModule.default || appModule;
    ReactDOM.createRoot(rootElement).render(
      React.createElement(React.StrictMode, null, React.createElement(App))
    );
  } catch (error) {
    console.error(error);
    rootElement.innerHTML =
      '<main class="page-shell"><section class="hero"><h1>Preview could not load.</h1><p class="hero-description"></p><a class="hero-link" href="https://github.com/saimansilwal7-oss/saiman-silwal-202537200/tree/main/Week%2011.1">Open the source files on GitHub</a></section></main>';
    rootElement.querySelector(".hero-description").textContent =
      error.message + " Check your connection and try again.";
  }
}

startGallery();
