import User from "../components/User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <h3>I am Manish</h3>
      <User />
      <UserClass name={"Manish Prajapati"} location={"Sirohi"} />
    </>
  );
};

export default About;
