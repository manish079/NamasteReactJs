import User from "../components/User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
// return (
//   <>
//     <h1>About</h1>
//     <h3>I am Manish</h3>
//     <User />
//     <UserClass name={"Manish Prajapati"} location={"Sirohi"} />
//   </>
// );
// };

//Passing props from a class component to into props

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
        <h1>About</h1>
        <h3>I am Manish</h3>
        {/* <User /> */}

        {/* pointer comes to UserClass then he start mounting of UserClass even About class mounting has not been complete yet */}

        <UserClass name={"First"} location={"Sirohi"} />
        <UserClass name={"Second"} location={"Delhi"} />
        <UserClass name={"Third"} location={"Delhi"} />
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
