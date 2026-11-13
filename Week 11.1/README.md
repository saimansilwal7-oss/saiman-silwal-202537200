# Week 11.1 — React Portfolio Gallery

A Create React App project for the Web Programming Week 11.1 homework.

## Assignment requirements

- **ProjectCard:** A reusable component that displays each project's title, description, technology stack, GitHub link, and demo link.
- **ProjectList:** Renders four project cards from a JavaScript array using `.map()`.
- **FilterBar:** Provides working **ALL**, **REACT**, **NODE**, and **CSS** filters.
- **React state:** The selected filter is stored with `useState`; `useMemo` derives the filtered project list.
- **Responsive design:** The gallery adapts to smaller screens and includes visible keyboard-focus styles.

## Professor's key takeaways demonstrated

1. **Components are functions that return JSX.** `ProjectCard`, `ProjectList`, `FilterBar`, and `App` are function components that return JSX.
2. **Props flow one way — from parent to child.** `App` passes `activeFilter` and `onFilterChange` to `FilterBar`, and passes the filtered `projects` array to `ProjectList`. Child components receive props; they do not directly change the parent's state. The callback lets the child request a change while the state remains in the parent.
3. **Every list item needs a unique, stable key.** The project cards use `key={project.id}`; the filter buttons use `key={filter}`; technology tags use `key={technology}`.
4. **Conditional rendering.** `ProjectList` returns an empty-state message when there are no matching projects, and otherwise renders the project grid.
5. **Component composition.** `App` combines the smaller `FilterBar` and `ProjectList` components to build the complete gallery.

## Run locally

This project uses Create React App.

```bash
cd "Week 11.1"
npm install
npm start
```

Open http://localhost:3000 in your browser.

To create a production build:

```bash
npm run build
```

## Project structure

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

## Online links

- [Interactive gallery preview](https://saimansilwal7-oss.github.io/saiman-silwal-202537200/Week%2011.1/preview.html)
- [Week 11.1 source folder on GitHub](https://github.com/saimansilwal7-oss/saiman-silwal-202537200/tree/main/Week%2011.1)
- [Personal weekly assignment website](https://saimansilwal7-oss.github.io/saiman-silwal-202537200/)

Student: Saiman Silwal  
Student ID: 202537200  
Course: Web Programming
