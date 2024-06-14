import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "default",
        location: "DEFAULT",
        avatar_url: "http://dummy-photo.com",
      },
    };

    console.log("Child class constructor: " + this.props.name);
  }

  /**
   * componentDidMount() function is used to calls APIs in class based components.
   * But why we use this
   * Before API calling First rendered component then once component is rendered then fetch data from API is best way So we known componentDidMount() function called after then rendered method. (first constructor is called then rendered method then componentDidMount())
   *
   */

  /* 
  componentDidMount() {
    //life cycle react
    //constructor will be called first
    //then render will be called
    //then componentDidMount() called

    console.log("Child Component Did Mount: " + this.props.name);
  }
 */

  async componentDidMount() {
    console.log("Child class did Mount: ");

    const response = await fetch("https://api.github.com/users/manish079");

    const jsonData = await response.json();
    console.log(jsonData);

    this.setState({
      userData: jsonData,
    });
  }

  //First time update data with default when component is rendered and set default data Then after render componentDidMount() is called and it get data from API and again DOM is render with API data
  componentDidUpdate() {
    //called just before a component is unMounting(disabling or removing from UI)

    //When we goes on new page then tis function wll called

    console.log("Child class Component Did Update");
  }

  componentWillUnmount() {
    //called just before component is unmounting (removing from UI)

    console.log("Component Will Unmount");
  }

  render() {
    const { count1, count2 } = this.state;

    const { name, location, avatar_url } = this.state.userData;

    console.log("Child class render");

    return (
      <div className="user-card">
        {/* <h1>count1: {count1}</h1> */}
        {/* <button
          onClick={() => {
            //Never update State variable directly
            //this.state.count1 = this.state.count1 + 1;

            this.setState({
              count1: this.state.count1 + 1,
              //React reconciliation algo only update value of count 1 it will not touch to count2 and count3
            });

            //On every increase value react do re-render class component same like in function component
            //It only changes the component where we have made changes
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} style={{ width: "100px" }}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @manish79</h4>
      </div>
    );
  }
}

/*****
 *
 * constructor is called
 *
 * Render (Dummy data)
 *    <HTML loaded with dummy data for few minutes>
 *
 * Component Did Mount
 *    <API CALL>
 *    <this.setState> -> State variable is updated
 *
 * ----UPDATE
 *
 *      render(API DATA)
 *      <HTML (new API call)
 *      component Did mount update
 *
 *
 *
 */

export default UserClass;
