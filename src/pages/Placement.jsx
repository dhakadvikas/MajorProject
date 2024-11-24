import Cource from "../component/Cource";
import Facility from "../component/Facility";
import Hero from "../component/Hero";
import Say from "../component/Say";
import Discover from "../component/Discover";
import FAQ from "../component/FAQ";
import PlacementData from "../component/PlacementData";

export default function Placement() {
  return (
    <>
      <div className=" bg-gray-50">
        <br />
        <br />
        <Hero
          title={"Empower"}
          H1={"Unlock Your Potential"}
          para={
            "Welcome to the Placement Cell, where we help you secure internships and job placements."
          }
        />
        <Hero
          H1={"Building Industry "}
          H2={"Partnerships for Successful "}
          H3={"Placements"}
          para={
            "Our placement program connects students with top companies, providing valuable industry experience and career opportunities."
          }
          img={
            "https://static.vecteezy.com/system/resources/previews/021/597/800/original/partnership-3d-render-icon-illustration-png.png"
          }
          url2="/login"
        />
        <Cource
          title={"Innovate"}
          H1={"Unlock Your Potential with Our "}
          H2={"Comprehensive Services"}
          para={
            "Goal: providing a wide range of services to help individuals reach their full potential"
          }
          cardImg1={
            "https://cdn3d.iconscout.com/3d/premium/thumb/financial-report-10739269-8662479.png?f=webp"
          }
          cardHeading1={"Dedicated Placement Coordinators"}
          cardPara1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          cardImg3={
            "https://img.freepik.com/premium-vector/3d-resume-concept-cv-curriculum-vitae-headhunting-recruting-rating-employees-worker-icon-website-cartoon-isometric-vector-illustration-isolated-blue-background_1002658-1592.jpg?w=740"
          }
          cardHeading3={"Resume Building Workshops"}
          cardPara3={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          cardImg2={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTt8h0a-Ovm0VzLt5TU5Nw8YOMn4F371p__Lzq0--oA&s"
          }
          cardHeading2={"Mock Interviews"}
          cardPara2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          btn1={"Learn More"}
          btn2={"Sign Up >"}
          url1="/about"
          url2="/login"
        />
        <PlacementData />
        <br />
        <hr />
        <Facility
          heading={
            "Unlock Your Potential with Our Comprehensive Placement Program"
          }
          para={
            "Our placement program offers high placement rates, strong industry connections, and personalized career guidance to help you succeed."
          }
          bool={true}
          logo1={""}
          h1={"High Placement"}
          p1={
            "Benefit from our program's high placement rates and secure your dream job."
          }
          logo2={""}
          h2={"Industry Connections"}
          p2={
            "Leverage our strong industry connections to gain valuable opportunities and network with professionals."
          }
          img={
            "https://cdn3d.iconscout.com/3d/premium/thumb/business-person-holding-cv-5355164-4487280.png?f=webp"
          }
        />
        <Say />
        <Discover
          heading={"Unlock Your Career Potential Today"}
          para={
            "Register for Placement Services or Contact Us for More Information"
          }
          btn={true}
          b11={"Register"}
          b12={"Contact"}
          url1="/login"
          url2="/contact"
        />
        <FAQ />
      </div>
    </>
  );
}
