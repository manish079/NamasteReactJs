import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 1,
      count3: 0,
    };
  }
  render() {
    const { name, location } = this.props; // destructuring
    const { count1, count2 } = this.state;

    console.log("Class component rendered");

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
