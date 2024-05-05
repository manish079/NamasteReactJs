import React from "react";
import ReactDOM from "React-dom/client";

const HeaderComponent = () => <h1>This is header</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
