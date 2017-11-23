# Preact Redux Example

A **9kb** Preact + Redux boilerplate built with [Poi], implementing a To-Do List app.


<img src="https://i.gyazo.com/d655af6fc8768487897b13eb31500aa7.gif" width="207" />


---


# Quick-Start Guide

- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Structure](#structure)


## Usage

```sh
git clone https://github.com/poi-examples/preact-redux-example.git my-app
cd my-app
yarn
```

> You're done installing! Now let's get started developing.


## Development Workflow


**Start a live-reload development server:**

```sh
yarn dev
```

> This is a full web server nicely suited to your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.


**Generate a production build in `./build`:**

```sh
npm run build
```

You can now deploy the contents of the `build` directory to production!

---


## Structure

Apps are built up from simple units of functionality called Components. A Component is responsible for rendering a small part of an application, given some input data called `props`, generally passed in as attributes in JSX. A component can be as simple as:

```js
class Link extends Component {
  render({ to, children }) {
    return <a href={ to }>{ children }</a>;
  }
}
// usage:
<Link to="/">Home</Link>
```


---


## License

MIT
