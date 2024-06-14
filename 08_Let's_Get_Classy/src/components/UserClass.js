import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 1,
      count3: 0,
    };

    console.log("Child class constructor: " + this.props.name);
  }

  /**
   * componentDidMount() function is used to calls APIs in class based components.
   * But why we use this
   * Before API calling First rendered component then once component is rendered then fetch data from API is best way So we known componentDidMount() function called after then rendered method. (first constructor is called then rendered method then componentDidMount())
   *
   */

  componentDidMount() {
    //life cycle react
    //constructor will be called first
    //then render will be called
    //then componentDidMount() called

    console.log("Child Component Did Mount: " + this.props.name);
  }

  render() {
    const { name, location } = this.props; // destructuring
    const { count1, count2 } = this.state;

    console.log("Child Class component rendered: " + this.props.name);

    return (
      <div className="user-card">
        <h1>count1: {count1}</h1>
        <button
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
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @manish79</h4>
      </div>
    );
  }
}

export default UserClass;
