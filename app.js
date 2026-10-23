const API_ROOT = "https://api.github.com";
const RAW_ROOT = "https://raw.githubusercontent.com";
const MAX_PREVIEW_BYTES = 2 * 1024 * 1024;
const STATIC_TREES = {
  "WEEK 1": [
    {
      "path": "EX-1.html",
      "type": "blob",
      "size": 235
    },
    {
      "path": "EX-2.html",
      "type": "blob",
      "size": 724
    },
    {
      "path": "EX-3.html",
      "type": "blob",
      "size": 1312
    },
    {
      "path": "EX-4.html",
      "type": "blob",
      "size": 424
    },
    {
      "path": "EX-5.html",
      "type": "blob",
      "size": 1013
    },
    {
      "path": "EX-6.html",
      "type": "blob",
      "size": 696
    },
    {
      "path": "EX-7.html",
      "type": "blob",
      "size": 1385
    },
    {
      "path": "EX-8.html",
      "type": "blob",
      "size": 2118
    },
    {
      "path": "TEMP.TXT",
      "type": "blob",
      "size": 1
    }
  ],
  "WEEK2": [
    {
      "path": "ACTIVITY",
      "type": "blob",
      "size": 1
    },
    {
      "path": "TASK 1.html",
      "type": "blob",
      "size": 509
    },
    {
      "path": "TASK2.html",
      "type": "blob",
      "size": 1618
    },
    {
      "path": "TASK3.html",
      "type": "blob",
      "size": 997
    },
    {
      "path": "TASK4.html",
      "type": "blob",
      "size": 922
    },
    {
      "path": "TASK5.html",
      "type": "blob",
      "size": 4063
    },
    {
      "path": "TASK6.html",
      "type": "blob",
      "size": 485
    },
    {
      "path": "TASK7.html",
      "type": "blob",
      "size": 1007
    },
    {
      "path": "TASK8.html",
      "type": "blob",
      "size": 4513
    }
  ],
  "WEEK3": [
    {
      "path": "E1",
      "type": "blob",
      "size": 114
    },
    {
      "path": "E2",
      "type": "blob",
      "size": 532
    },
    {
      "path": "E3",
      "type": "blob",
      "size": 941
    },
    {
      "path": "E4",
      "type": "blob",
      "size": 757
    },
    {
      "path": "E5",
      "type": "blob",
      "size": 647
    },
    {
      "path": "E6",
      "type": "blob",
      "size": 1031
    },
    {
      "path": "E7",
      "type": "blob",
      "size": 2172
    },
    {
      "path": "E8",
      "type": "blob",
      "size": 6116
    },
    {
      "path": "TXT.html",
      "type": "blob",
      "size": 1
    }
  ],
  "WEEK3.2": [
    {
      "path": "E1",
      "type": "blob",
      "size": 919
    },
    {
      "path": "E2",
      "type": "blob",
      "size": 471
    },
    {
      "path": "E3",
      "type": "blob",
      "size": 471
    },
    {
      "path": "E4",
      "type": "blob",
      "size": 939
    },
    {
      "path": "E5",
      "type": "blob",
      "size": 1197
    },
    {
      "path": "E6",
      "type": "blob",
      "size": 1349
    },
    {
      "path": "E7",
      "type": "blob",
      "size": 3011
    }
  ],
  "WEEK4": [
    {
      "path": "E1",
      "type": "blob",
      "size": 816
    },
    {
      "path": "E2",
      "type": "blob",
      "size": 1130
    },
    {
      "path": "E3",
      "type": "blob",
      "size": 1967
    },
    {
      "path": "E4",
      "type": "blob",
      "size": 1555
    },
    {
      "path": "HTNL.TXT",
      "type": "blob",
      "size": 1
    }
  ],
  "WEEK 5": [
    {
      "path": "Complete mini-app",
      "type": "blob",
      "size": 1815
    },
    {
      "path": "Conditions(if_else)",
      "type": "blob",
      "size": 1175
    },
    {
      "path": "Loops",
      "type": "blob",
      "size": 925
    },
    {
      "path": "txt.html",
      "type": "blob",
      "size": 1
    }
  ],
  "WEEK 6.1": [
    {
      "path": "01-official-joke-api.html",
      "type": "blob",
      "size": 8754
    },
    {
      "path": "02-jsonplaceholder.html",
      "type": "blob",
      "size": 8715
    },
    {
      "path": "03-open-meteo.html",
      "type": "blob",
      "size": 10127
    },
    {
      "path": "04-random-user.html",
      "type": "blob",
      "size": 9210
    },
    {
      "path": "05-pokeapi.html",
      "type": "blob",
      "size": 9380
    },
    {
      "path": "06-rest-countries.html",
      "type": "blob",
      "size": 9854
    }
  ],
  "WEEK 7.1": [
    {"path":"step1_html.html","type":"blob","size":650},
    {"path":"step2_css.html","type":"blob","size":1699},
    {"path":"step3_dom.html","type":"blob","size":1301},
    {"path":"step4_fetch.html","type":"blob","size":1998},
    {"path":"step5_render.html","type":"blob","size":3152},
    {"path":"step6_polish.html","type":"blob","size":4378},
    {"path":"book_fetcher.html","type":"blob","size":5461}
  ],
  "WEEK 8.1": [
    {"path":"student_registration_form.html","type":"blob","size":6729}
  ]
};
const SHARED_FOLDERS = [
  { label: "WEEK 1", url: "https://github.com/saimansilwal7-oss/WEB-PROGRAMMING/tree/main/WEEK%201" },
  { label: "WEEK2", url: "https://github.com/saimansilwal7-oss/WEB-PROGRAMMING/tree/main/WEEK2" },
  { label: "WEEK3", url: "https://github.com/saimansilwal7-oss/WEB-PROGRAMMING/tree/main/WEEK3" },
  { label: "WEEK3.2", url: "https://github.com/saimansilwal7-oss/WEB-PROGRAMMING/tree/main/WEEK3.2" },
  { label: "WEEK4", url: "https://github.com/saimansilwal7-oss/WEB-PROGRAMMING/tree/main/WEEK4" },
  { label: "WEEK 5", url: "https://github.com/saimansilwal7-oss/WEB-PROGRAMMING/tree/main/WEEK%205" },
  { label: "WEEK 6.1", url: "https://github.com/saimansilwal7-oss/WEB-PROGRAMMING/tree/main/WEEK%206.1" },
  { label: "WEEK 7.1", url: "https://github.com/saimansilwal7-oss/WEB-PROGRAMMING/tree/main/WEEK%207.1" },
  { label: "WEEK 8.1", url: "https://github.com/saimansilwal7-oss/WEB-PROGRAMMING/tree/main/WEEK%208.1" },
];

const elements = {
  repoContext: document.querySelector("#repo-context"),
  breadcrumb: document.querySelector("#breadcrumb"),
  sharedFolders: document.querySelector("#shared-folders"),
  refreshButton: document.querySelector("#refresh-button"),
  fileTree: document.querySelector("#file-tree"),
  preview: document.querySelector("#preview"),
  status: document.querySelector("#status-message"),
  branch: document.querySelector("#branch-label"),
};

const state = {
  selectedRepository: null,
  tree: [],
  treeByPath: new Map(),
  expanded: new Set([""]),
  currentDirectory: "",
  selectedFile: "",
  previewRequest: 0,
  folderRequest: 0,
  activeFolder: null,
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function setStatus(message, tone = "muted") {
  elements.status.replaceChildren();
  const dot = document.createElement("span");
  dot.className = `status-dot${tone === "muted" ? " muted" : ""}`;
  const text = document.createTextNode(message);
  elements.status.append(dot, text);
}

async function apiGet(url) {
  const response = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
  if (!response.ok) {
    let message = `GitHub returned ${response.status}.`;
    try {
      const details = await response.json();
      if (details.message) message = details.message;
    } catch { /* Keep the status-based message. */ }
    if (response.status === 403 && response.headers.get("X-RateLimit-Remaining") === "0") {
      message = "GitHub's public API limit has been reached. Try again later.";
    }
    throw new Error(message);
  }
  return response.json();
}

function showError(container, message) {
  container.replaceChildren();
  const notice = document.createElement("div");
  notice.className = "error-state";
  notice.textContent = message;
  container.append(notice);
}

function showEmptyPreview() {
  const empty = document.createElement("div");
  empty.className = "preview-empty";
  empty.innerHTML = '<div class="preview-art" aria-hidden="true"><span class="art-sheet art-sheet-lime"></span><span class="art-sheet art-sheet-coral"></span><span class="art-sheet art-sheet-paper"><i></i><i></i><i></i><b>OPEN<br>FILE</b></span><span class="art-sticker">01</span><span class="art-spark">✳</span></div><p class="eyebrow">YOUR WORKSPACE</p><h2>Pick a file.<br>See it come to life.</h2><p>Choose an item from the explorer to open its output here.</p>';
  elements.preview.replaceChildren(empty);
}

function createRawUrl(repository, path) {
  const branchPath = repository.default_branch.split("/").map(encodeURIComponent).join("/");
  const fullPath = [repository.folderPath, path].filter(Boolean).join("/");
  const filePath = fullPath.split("/").map(encodeURIComponent).join("/");
  return `${RAW_ROOT}/${encodeURIComponent(repository.owner.login)}/${encodeURIComponent(repository.name)}/${branchPath}/${filePath}`;
}

function buildTree(entries) {
  const root = { name: "", path: "", type: "tree", children: [] };
  const directories = new Map([["", root]]);
  const treeByPath = new Map([["", root]]);
  const sortedEntries = entries
    .filter((entry) => entry.type === "tree" || entry.type === "blob")
    .sort((a, b) => a.path.localeCompare(b.path));

  for (const entry of sortedEntries) {
    const segments = entry.path.split("/");
    const name = segments.at(-1);
    const parentPath = segments.slice(0, -1).join("/");
    let parent = directories.get(parentPath);
    if (!parent) {
      const missingSegments = parentPath.split("/");
      let partialPath = "";
      parent = root;
      for (const segment of missingSegments) {
        partialPath = partialPath ? `${partialPath}/${segment}` : segment;
        let directory = directories.get(partialPath);
        if (!directory) {
          directory = { name: segment, path: partialPath, type: "tree", children: [] };
          directories.set(partialPath, directory);
          treeByPath.set(partialPath, directory);
          parent.children.push(directory);
        }
        parent = directory;
      }
    }

    if (entry.type === "tree") {
      let directory = directories.get(entry.path);
      if (!directory) {
        directory = { name, path: entry.path, type: "tree", children: [] };
        directories.set(entry.path, directory);
        parent.children.push(directory);
      }
      treeByPath.set(entry.path, directory);
    } else {
      const file = { name, path: entry.path, type: "blob", size: entry.size || 0 };
      parent.children.push(file);
      treeByPath.set(entry.path, file);
    }
  }
  return { root, treeByPath };
}

function visibleChildren(directoryPath) {
  const directory = state.treeByPath.get(directoryPath);
  return directory?.children || [];
}

function renderTree() {
  elements.fileTree.replaceChildren();
  if (!state.selectedRepository) {
    const placeholder = document.createElement("div");
    placeholder.className = "tree-placeholder";
    placeholder.textContent = "Your selected repository's folders and files will appear here.";
    elements.fileTree.append(placeholder);
    return;
  }

  const rootEntries = visibleChildren("");
  if (!rootEntries.length) {
    const empty = document.createElement("div");
    empty.className = "tree-placeholder";
    empty.textContent = "This repository has no files on its default branch.";
    elements.fileTree.append(empty);
    return;
  }

  const list = document.createElement("div");
  for (const entry of rootEntries) list.append(renderTreeNode(entry));
  elements.fileTree.append(list);
}

function renderTreeNode(entry) {
  const wrapper = document.createElement("div");
  wrapper.className = "tree-node";
  const row = document.createElement("button");
  row.type = "button";
  row.className = `tree-row${entry.type === "tree" ? " folder-row" : ""}`;
  row.style.paddingLeft = `${5 + entry.path.split("/").length * 2}px`;
  row.setAttribute("aria-current", String(state.selectedFile === entry.path));
  const icon = document.createElement("span");
  icon.className = "node-icon";
  icon.textContent = entry.type === "tree" ? (state.expanded.has(entry.path) ? "▾" : "▸") : "·";
  const label = document.createElement("span");
  label.className = "node-name";
  label.textContent = entry.name;
  row.append(icon, label);

  if (entry.type === "tree") {
    row.classList.add("folder-row");
    row.setAttribute("aria-expanded", String(state.expanded.has(entry.path)));
    row.addEventListener("click", () => {
      if (state.expanded.has(entry.path)) state.expanded.delete(entry.path);
      else state.expanded.add(entry.path);
      state.currentDirectory = entry.path;
      renderTree();
      renderBreadcrumb();
    });
    wrapper.append(row);
    if (state.expanded.has(entry.path)) {
      const children = document.createElement("div");
      children.className = "tree-children";
      for (const child of entry.children) children.append(renderTreeNode(child));
      wrapper.append(children);
    }
  } else {
    row.addEventListener("click", () => openFile(entry));
    wrapper.append(row);
  }
  return wrapper;
}

function renderBreadcrumb() {
  elements.breadcrumb.replaceChildren();
  if (!state.selectedRepository) return;
  const rootButton = document.createElement("button");
  rootButton.type = "button";
  rootButton.className = "crumb";
  rootButton.textContent = state.selectedRepository.folderLabel;
  rootButton.addEventListener("click", () => {
    state.currentDirectory = "";
    renderBreadcrumb();
    setStatus("Repository root");
  });
  elements.breadcrumb.append(rootButton);

  const segments = state.currentDirectory ? state.currentDirectory.split("/") : [];
  let currentPath = "";
  segments.forEach((segment, index) => {
    const separator = document.createElement("span");
    separator.className = "crumb-separator";
    separator.textContent = "/";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "crumb";
    button.textContent = segment;
    currentPath = currentPath ? `${currentPath}/${segment}` : segment;
    const targetPath = currentPath;
    button.addEventListener("click", () => {
      state.currentDirectory = targetPath;
      for (let parent = targetPath; parent; parent = parent.slice(0, parent.lastIndexOf("/"))) {
        state.expanded.add(parent);
      }
      renderTree();
      renderBreadcrumb();
    });
    elements.breadcrumb.append(separator, button);
    if (index === segments.length - 1) button.setAttribute("aria-current", "location");
  });
}

function findEntryPath(path) {
  const segments = path.split("/");
  let current = "";
  for (const segment of segments) {
    current = current ? `${current}/${segment}` : segment;
    state.expanded.add(current);
  }
  state.currentDirectory = segments.slice(0, -1).join("/");
}

function safeInlineMarkdown(text) {
  let result = escapeHtml(text);
  const codeFragments = [];
  result = result.replace(/`([^`]+)`/g, (_, code) => {
    const token = `\u0000CODE${codeFragments.length}\u0000`;
    codeFragments.push(`<code>${code}</code>`);
    return token;
  });
  result = result.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)/g, (_, label, url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });
  result = result.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>");
  result = result.replace(/\u0000CODE(\d+)\u0000/g, (_, index) => codeFragments[Number(index)]);
  return result;
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const output = [];
  let paragraph = [];
  let listType = "";
  let codeLines = null;
  let codeLanguage = "";

  const closeParagraph = () => {
    if (paragraph.length) output.push(`<p>${paragraph.map(safeInlineMarkdown).join("<br>")}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (listType) output.push(`</${listType}>`);
    listType = "";
  };

  for (const line of lines) {
    const fence = line.match(/^\s*```\s*([\w+-]*)\s*$/);
    if (fence && codeLines === null) {
      closeParagraph(); closeList(); codeLines = []; codeLanguage = fence[1]; continue;
    }
    if (fence && codeLines !== null) {
      output.push(`<pre><code class="language-${escapeHtml(codeLanguage)}">${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      codeLines = null; codeLanguage = ""; continue;
    }
    if (codeLines !== null) { codeLines.push(line); continue; }
    if (!line.trim()) { closeParagraph(); closeList(); continue; }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      closeParagraph(); closeList();
      const level = heading[1].length;
      output.push(`<h${level}>${safeInlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }
    if (/^\s*(---+|___+|\*\*\*+)\s*$/.test(line)) {
      closeParagraph(); closeList(); output.push("<hr>"); continue;
    }
    if (/^\s*>/.test(line)) {
      closeParagraph(); closeList();
      output.push(`<blockquote>${safeInlineMarkdown(line.replace(/^\s*>\s?/, ""))}</blockquote>`);
      continue;
    }
    const item = line.match(/^\s*(?:[-*+]\s+|\d+[.)]\s+)(.*)$/);
    if (item) {
      closeParagraph();
      const nextType = /^\s*\d+[.)]\s+/.test(line) ? "ol" : "ul";
      if (listType !== nextType) { closeList(); output.push(`<${nextType}>`); listType = nextType; }
      output.push(`<li>${safeInlineMarkdown(item[1])}</li>`);
      continue;
    }
    closeList(); paragraph.push(line);
  }
  closeParagraph(); closeList();
  if (codeLines !== null) output.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  return output.join("\n");
}

function previewHeader(path, rawUrl) {
  const header = document.createElement("div");
  header.className = "preview-header";
  const filename = document.createElement("span");
  filename.className = "preview-file-name";
  filename.textContent = path;
  const actions = document.createElement("div");
  actions.className = "preview-actions";
  const rawLink = document.createElement("a");
  rawLink.href = rawUrl;
  rawLink.target = "_blank";
  rawLink.rel = "noopener noreferrer";
  rawLink.textContent = "Open raw ↗";
  actions.append(rawLink);
  header.append(filename, actions);
  return header;
}

function showPreviewMessage(message) {
  const notice = document.createElement("div");
  notice.className = "file-notice";
  notice.textContent = message;
  elements.preview.append(notice);
}

async function openFile(file) {
  if (!state.selectedRepository) return;
  state.selectedFile = file.path;
  findEntryPath(file.path);
  renderTree();
  renderBreadcrumb();
  const request = ++state.previewRequest;
  const repository = state.selectedRepository;
  const rawUrl = createRawUrl(repository, file.path);
  elements.preview.replaceChildren(previewHeader(file.path, rawUrl));
  const content = document.createElement("div");
  content.className = "preview-content";
  elements.preview.append(content);
  setStatus(`Opening ${file.name}`, "active");

  const extension = file.name.split(".").pop().toLowerCase();
  const imageTypes = new Set(["png", "jpg", "jpeg", "gif", "webp", "svg", "avif", "bmp"]);
  if (imageTypes.has(extension)) {
    content.classList.add("image-preview");
    const image = document.createElement("img");
    image.alt = file.name;
    image.src = rawUrl;
    image.addEventListener("load", () => setStatus(`Image · ${file.name}`, "active"), { once: true });
    image.addEventListener("error", () => showPreviewMessage("This image could not be loaded from GitHub."), { once: true });
    content.append(image);
    return;
  }

  if (file.size > MAX_PREVIEW_BYTES) {
    showPreviewMessage("This file is larger than the 2 MB preview limit. Use Open raw to view or download it.");
    setStatus(`Preview skipped · ${file.name}`);
    return;
  }

  try {
    const response = await fetch(rawUrl);
    if (!response.ok) throw new Error(`GitHub could not load this file (${response.status}).`);
    const declaredSize = Number(response.headers.get("Content-Length")) || 0;
    if (declaredSize > MAX_PREVIEW_BYTES) {
      showPreviewMessage("This file is larger than the 2 MB preview limit. Use Open raw to view or download it.");
      setStatus(`Preview skipped · ${file.name}`);
      return;
    }
    const text = await response.text();
    if (request !== state.previewRequest) return;
    if (text.length > MAX_PREVIEW_BYTES) {
      showPreviewMessage("This file is larger than the 2 MB preview limit. Use Open raw to view or download it.");
      setStatus(`Preview skipped · ${file.name}`);
      return;
    }

    const htmlProbe = text.replace(/^\uFEFF/, "").trimStart();
    const isHtmlDocument = ["html", "htm"].includes(extension)
      || /^<!doctype\s+html\b/i.test(htmlProbe)
      || /^<html(?:\s|>)/i.test(htmlProbe);
    if (isHtmlDocument) {
      const frame = document.createElement("iframe");
      frame.className = "html-frame";
      frame.title = `Preview of ${file.name}`;
      frame.setAttribute("sandbox", "allow-scripts");
      const baseUrl = rawUrl.slice(0, rawUrl.lastIndexOf("/") + 1);
      const baseTag = `<base href="${escapeHtml(baseUrl)}">`;
      frame.srcdoc = /<head(?:\s[^>]*)?>/i.test(text)
        ? text.replace(/<head(?:\s[^>]*)?>/i, (head) => `${head}${baseTag}`)
        : `${baseTag}${text}`;
      elements.preview.replaceChildren(previewHeader(file.path, rawUrl), frame);
      setStatus(`HTML preview · sandboxed · ${file.name}`, "active");
    } else if (["md", "markdown"].includes(extension)) {
      content.className = "preview-content markdown-content";
      content.innerHTML = renderMarkdown(text);
      setStatus(`Markdown · ${file.name}`, "active");
    } else {
      const code = document.createElement("pre");
      code.className = "code-frame";
      if (extension === "json") {
        try { code.textContent = JSON.stringify(JSON.parse(text), null, 2); }
        catch { code.textContent = text; }
      } else {
        code.textContent = text;
      }
      content.replaceWith(code);
      const type = extension ? `${extension.toUpperCase()} source` : "Text file";
      setStatus(`${type} · ${file.name}`, "active");
    }
  } catch (error) {
    if (request !== state.previewRequest) return;
    showPreviewMessage(`${error.message} You can still try Open raw.`);
    setStatus(`Could not preview · ${file.name}`);
  }
}

function renderSharedFolders() {
  elements.sharedFolders.replaceChildren();
  for (const folder of SHARED_FOLDERS) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "shared-folder-button";
    button.dataset.folderLabel = folder.label;
    const index = document.createElement("span");
    index.className = "week-index";
    index.textContent = String(SHARED_FOLDERS.indexOf(folder) + 1).padStart(2, "0");
    const label = document.createElement("span");
    label.className = "week-name";
    label.textContent = folder.label;
    button.append(index, label);
    button.setAttribute("aria-current", "false");
    button.addEventListener("click", () => loadSharedFolder(folder));
    elements.sharedFolders.append(button);
  }
}

function parseFolderLink(folder) {
  const url = new URL(folder.url);
  if (url.hostname !== "github.com") throw new Error("The shared link must be from github.com.");
  const segments = url.pathname.split("/").filter(Boolean).map(decodeURIComponent);
  if (segments.length < 2) throw new Error("This link does not include a repository.");
  if (segments[2] === "blob") throw new Error("Use a folder link, not a file link.");
  const owner = segments[0];
  const repository = segments[1].replace(/\.git$/, "");
  const isTreeLink = segments[2] === "tree" && segments.length >= 4;
  return {
    owner,
    repository,
    branch: isTreeLink ? segments[3] : "",
    folderPath: isTreeLink ? segments.slice(4).join("/") : "",
  };
}

async function loadSharedFolder(folder) {
  const request = ++state.folderRequest;
  state.activeFolder = folder;
  state.selectedRepository = null;
  state.currentDirectory = "";
  state.selectedFile = "";
  state.expanded = new Set([""]);
  state.treeByPath = new Map();
  state.previewRequest += 1;
  elements.repoContext.querySelector("span:last-child").textContent = folder.label;
  elements.branch.textContent = "LOADING";
  elements.refreshButton.disabled = true;
  elements.breadcrumb.replaceChildren();
  elements.fileTree.replaceChildren();
  elements.preview.replaceChildren();
  elements.sharedFolders.querySelectorAll(".shared-folder-button").forEach((button) => {
    button.setAttribute("aria-current", String(button.dataset.folderLabel === folder.label));
  });
  const loading = document.createElement("div");
  loading.className = "loading-line";
  elements.fileTree.append(loading);
  setStatus(`Loading ${folder.label}`);

  try {
    const target = parseFolderLink(folder);
    const folderEntries = STATIC_TREES[folder.label];
    if (!folderEntries) throw new Error(`No saved folder index exists for ${folder.label}.`);
    const repository = {
      id: 0,
      owner: { login: target.owner },
      name: target.repository,
      full_name: `${target.owner}/${target.repository}`,
      default_branch: target.branch || "main",
      folderPath: target.folderPath,
      folderLabel: folder.label,
    };
    state.selectedRepository = repository;
    elements.branch.textContent = repository.default_branch.toUpperCase();
    const scopedEntries = folderEntries.map((entry) => ({ ...entry }));
    const built = buildTree(scopedEntries);
    state.tree = built.root.children;
    state.treeByPath = built.treeByPath;
    renderTree();
    renderBreadcrumb();
    elements.refreshButton.disabled = false;
    setStatus(`${scopedEntries.length} items · ${folder.label}`, "active");
    showEmptyPreview();
  } catch (error) {
    if (request !== state.folderRequest) return;
    showError(elements.fileTree, error.message);
    showError(elements.preview, error.message);
    setStatus(`Could not load ${folder.label}`);
  }
}

elements.refreshButton.addEventListener("click", () => {
  if (state.activeFolder) loadSharedFolder(state.activeFolder);
});

renderSharedFolders();
loadSharedFolder(SHARED_FOLDERS[0]);
