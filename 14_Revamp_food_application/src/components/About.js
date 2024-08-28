import User from "../components/User";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent class(About) constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent class(About) rendered");
    return (
      <>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        <UserClass name={"First"} location={"Sirohi"} />
      </>
    );
  }
}

/* 
  React Lifecycle
 
  parent class constructor
  parent class render
  
      first class constructor
      first class render
      
      second class constructor
      second class render
      
      third class constructor
      third class render
    
      <DOM UPDATING - IN single BATCH>

      first class componentDidMount
      second class componentDidMount
      third class componentDidMount
 
  */

export default About;
