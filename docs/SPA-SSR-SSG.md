# Single Page App (SPA), Server Side Rendered (SSR), and Static Site Generation (SSG)

## Single Page App (SPA)

Load a single HTML file and JavaScript loads the entire UI including routes.

Pros:
- The react app can have multiple routes with fast load times

Cons:
- This is bad for Search Engine Optimization (SEO) since everything is loaded into a single web page.

In this project, the single page is a static HTML file: [index.html](../react-crash-2024/index.html)

In this HTML file, [main.jsx](../react-crash-2024/src/main.jsx) gets pulled into the page, creating the root JSX inside the target root element, using `ReactDOM.createRoot(rootElement).render(...<jsx>...)`

## Server Side Rendered (SSR)

Server sends fully rendered page to client. You can fetch data and load it as well.

Pros:
- Better for SEO and initial page load time.
- Better security since sensitive data can be handled server-side instead of being passed across the internet on the client.

TODO

## Static Site Generation (SSG)

A framework generates static HTML files at build time. These are very fast.

Pros:
- Very fast because static web pages are pre-loaded before they are requested and displayed

TODO