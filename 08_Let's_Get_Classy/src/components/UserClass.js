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

  //below function called after every update (componentDidMount call only initial render component)
  componentDidUpdate() {
    //called just before a component is unMounting(disabling or removing from UI)

    //When we goes on new page then tis function wll called

    console.log("Child class Component Did Update");

    //we need to cleaning up this into unMounting phase because when go into another page or component it still runing into background
    this.timer = setInterval(() => {
      console.log("Timer...");
    }, 1000);
  }

  /*
    - componentWillUnmount use to cleaning 
    - as we know react is SPA(Single Page Application) we do only plays with component here and there
    - When we load any component then we need to clear some things like if we use setInterval or setTimeout into useEffect() or componentDidMount and we render another component then previous component setInterval is running So to make out app scalable We need to do cleaning
  */
  componentWillUnmount() {
    //called just before component is unmounting (removing from UI)

    clearInterval(this.timer); //Thi will do cleaning of setInterval

    console.log("Component Will Unmount");
  }

  //Same issue is in useEffect also into functionalComponent where we also need to clean up any code we use return.

  /* 
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("Timer from useEffect");
    }, 1000)
  
    console.log("User Effect");

    return will be called when we go to another page  (another component)
    return ()=>{
      clearInterval(timer)
      console.log("useEffect Return");
    }
  }, []);
   */

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
