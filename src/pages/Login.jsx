import Discover from "../component/Discover";
import FAQ from "../component/FAQ";
import Facility from "../component/Facility";
import Hero from "../component/Hero";
import Touch from "../component/Touch";
import Background from "../component/Background";

export default function Login() {
  return (
    <>
      <div className=" bg-gray-50">
        <br /> <br />
        <Discover
          title={"Discover"}
          heading={"Empowering Future Engineers"}
          para={
            "Welcome to the CSE department website, where we provide a platform for students, faculty, and researchers to explore the exciting world of computer science and engineering. Join us on this journey of innovation and discovery."
          }
          btn={true}
          b11={"Learn More"}
          b12={"Sign Up >"}
        />
        <br />
        <hr />
        <br />
        <Touch />
        <Hero
          H1={"Join our community "}
          H2={"today!"}
          para={
            "Discover the latest updates and resources for the Cse department."
          }
          img={
            "https://t3.ftcdn.net/jpg/06/65/12/60/360_F_665126052_gII75s7pJNJ8fL0oxfaQ1weIxNH3KGnB.jpg"
          }
        />
        <Background
          heading={"Need help with registration or login?"}
          para={
            "Contact our support team for assistance with any registration or login issues."
          }
          image={
            "https://www.godaddy.com/resources/wp-content/uploads/2024/02/create-website-wth-ai-featured-a9DnJf.tmp_.jpeg?size=3840x0"
          }
          btn1={"Contact"}
          btn2={"Support"}
        />
      </div>
      <FAQ />
    </>
  );
}
