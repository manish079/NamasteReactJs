import React from "react";
import ReactDOM from "React-dom/client";

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

// React ELement
const heading = (
  <div>
    <h1>Hello World</h1>
    <h2>Hello World</h2>
    <h3>Hello World</h3>
    <h4>Hello World</h4>
    <h5>Hello World</h5>
    <h6>Hello World</h6>
  </div>
);

//React Component
// 1. Class Based Component - OLD
// 2. Functional Component - NEW

// React Functional Component -> Its just normal JS function thar return some JSX or return react element

// ALways write capital first letter in component name
const HeadingComponent1 = () => {
  return <h1>Functional Component</h1>;
};

const TitleHeading = () => <h1>This is Title 🚀</h1>;

//component composition:- one component inside another
const HeadingComponent = () => {
  return (
    <div id="container">
      {/* {TitleHeading()} */}
      <TitleHeading />
      {heading} // JSX does senitizing the data (prevent from XSS attack)
      <h1 className="heading">Hello Manish, How are you?</h1>
    </div>
  );
};

const F1 = () => <p>Don't need to write return if one liner code</p>;

const F2 = () => (
  <div>
    <p>Don't need to write return if one liner code</p>
  </div>
);

//Fragment
const F3 = () => (
  <>
    <p>Don't need to write return if one liner code</p>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(HeadingComponent());
root.render(<HeadingComponent />);
// root.render(<HeadingComponent></HeadingComponent>);
