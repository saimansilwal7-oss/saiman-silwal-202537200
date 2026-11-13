# Week 11.1 — My React Project Gallery

This is my Week 11.1 Web Programming assignment. I made a small gallery to practise React components, props, lists, keys, and filtering.

## What I made

- **ProjectCard:** Shows one project's name, short description, technologies, and links.
- **ProjectList:** Uses `.map()` to show the project cards from an array.
- **FilterBar:** Has ALL, REACT, NODE, and CSS buttons. Selecting a button changes which projects are shown.
- **State and props:** I keep the selected filter in `App` with `useState`, then pass the value and function to `FilterBar` through props.
- **Keys:** Each project uses its ID as a key. The filter buttons and technology tags also have keys.
- **Empty result:** If a filter has no matching projects, the page shows a short message instead of an empty space.
- **Mobile layout:** The cards change to one column on a small screen.

## What I understood from this lesson

1. A React component is a function that returns JSX. I used this for the gallery, cards, list, and filter bar.
2. Props go from the parent component to the child component. In my project, `App` sends the filter value and change function to `FilterBar`.
3. Lists need stable keys. I used each project's ID so React can keep track of the cards.
4. I used conditional rendering in `ProjectList` to show a message when there are no matching projects.
5. I put smaller components together in `App` to make the full page.

## Run it on my computer

1. Open this folder in VS Code or a terminal.
2. Run:

```bash
npm install
npm start
```

3. Open http://localhost:3000.

To make a production build, run:

```bash
npm run build
```

## Folder structure

```text
Week 11.1/
├── package.json
├── README.md
├── preview.html
├── preview.js
├── public/
│   └── index.html
└── src/
    ├── App.js
    ├── index.js
    ├── components/
    │   ├── FilterBar.js
    │   ├── ProjectCard.js
    │   └── ProjectList.js
    ├── data/
    │   └── projects.js
    └── styles/
        └── App.css
```

The GitHub Pages preview loads the same component files from `src/`, so I do not need to keep a second copy of the React components.

## My links

- [Open the gallery preview](https://saimansilwal7-oss.github.io/saiman-silwal-202537200/Week%2011.1/preview.html)
- [See the Week 11.1 files on GitHub](https://github.com/saimansilwal7-oss/saiman-silwal-202537200/tree/main/Week%2011.1)
- [Open my weekly assignment website](https://saimansilwal7-oss.github.io/saiman-silwal-202537200/)

**Student:** Saiman Silwal  
**Student ID:** 202537200  
**Course:** Web Programming
