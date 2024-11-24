import Cource from "../component/Cource";
import Discover from "../component/Discover";
import FAQ from "../component/FAQ";
import Facility from "../component/Facility";
import Opportunities from "../component/Opportunities";
import Say from "../component/Say";

export default function Academic() {
  return (
    <>
      <div className="bg-gray-50">
        <Opportunities
          title={" Innovate"}
          heading={"Empowering Future Innovators"}
          para={
            "Welcome to the CSE department, where we offer a wide range of academic programs and opportunities for students to excel in the field of computer science and engineering."
          }
          b11={"Learn More"}
          b12={"Sign Up"}
          url11="/about"
          url12="/login"
        />
        <br />
        <hr />
        <br />

        <Facility
          img={
            "https://cdn3d.iconscout.com/3d/premium/thumb/web-development-4620450-3833097.png?f=webp"
          }
        >
          <div>
            <h1 className="text-3xl">Explore Our Programs</h1>
            <p className="text-sm">
              We offer a wide range of undergraduate, graduate, and doctoral
              programs to suit your academic and career goals. Our programs are
              designed to provide you with the knowledge and skills needed to
              succeed in the rapidly evolving field of computer science and
              engineering.
            </p>
          </div>
          <div>
            <h1 className="text-3xl">Experienced Faculty Members</h1>
            <p className="text-sm">
              Our department boasts a team of highly qualified and experienced
              faculty members who are dedicated to providing quality education
              and mentorship. They bring a wealth of industry experience and
              research expertise to the classroom, ensuring that you receive a
              well-rounded education.
            </p>
          </div>
          <div>
            <h1 className="text-3xl">Hands-On Learning Opportunities</h1>
            <p className="text-sm">
              At our department, we believe in the importance of practical,
              hands-on learning. Through internships, research projects, and
              industry collaborations, you'll have the opportunity to apply your
              knowledge in real-world settings, gaining valuable experience and
              building a strong foundation for your future career.
            </p>
          </div>
        </Facility>

        <Cource
          title={"Discover"}
          H1={"Explore Our Academic"}
          H2={" Structure and Grading System"}
          para={
            "Our academic structure is designed to provide students with a comprehensive education. We follow a semester-based system, where students earn course credits and are evaluated based on a grading system."
          }
          cardImg2={
            "https://as2.ftcdn.net/v2/jpg/05/37/35/27/1000_F_537352731_kkFhqEuAv0KkNSOWQKJx397nX4ZQuazx.jpg"
          }
          cardHeading2={"Semester-Based Education"}
          cardPara2={
            "Our courses are organized into semesters, allowing students to focus on a specific set of subjects at a time."
          }
          cardImg1={
            "https://www.shutterstock.com/image-vector/educational-web-seminar-internet-classes-600nw-2185213275.jpg"
          }
          cardHeading1={"Course Credits"}
          cardPara1={
            "Each course is assigned a certain number of credits, reflecting the workload and level of difficulty."
          }
          cardImg3={
            "https://img.freepik.com/premium-psd/nft-certificate-3d-icon-illustration_460336-1105.jpg"
          }
          cardHeading3={"Grading System"}
          cardPara3={
            "We use a comprehensive grading system to evaluate student performance, ensuring fairness and accuracy."
          }
        />

        <Facility
          title={"Innovate"}
          heading={"Empowering Students Through Industry Collaborations"}
          para={
            "At our department, we offer a unique academic program that combines classroom learning with real-world industry collaborations. Through this initiative, students gain hands-on experience and valuable skills that prepare them for successful careers in their chosen field."
          }
          bool={false}
          btn={true}
          btn1={"Learn More"}
          btn2={"Sign Up >"}
          img={
            "https://img.freepik.com/free-vector/hands-assembling-puzzle-concept-illustration_114360-17836.jpg"
          }
        />

        <Facility
          title={"Empower"}
          heading={
            "Academic Support Services: Enhancing Your Learning Experience"
          }
          para={
            "Our academic support services are designed to provide you with the tools and resources you need to succeed. From tutoring sessions to access to a vast library, we are here to support your learning journey."
          }
          bool={true}
          logo1="&#10065;"
          h1={"Tutoring: Personalized Assistance for Your Success"}
          p1={
            "Our tutoring program offers personalized assistance tailored to your individual needs, helping you grasp complex concepts and excel in your coursework."
          }
          logo2="&#10065;"
          h2={"Library Resources: Access to a Wealth of Knowledge"}
          p2={
            "Explore our extensive library resources, including books, journals, and online databases, to enhance your research and broaden your understanding."
          }
          btn={true}
          btn1={"Learn More"}
          btn2={"Sign Up >"}
          url1="/academic"
          url2="/login"
          img={
            "https://png.pngtree.com/png-clipart/20231015/original/pngtree-3d-customer-service-operator-png-illustration-png-image_13302774.png"
          }
        />

        <Say />
        <Discover
          heading={"Discover Your Future at CSE"}
          para={
            "Explore our cutting-edge academic programs and prepare for a successful career in technology."
          }
          btn={true}
          b11={"Apply"}
          b12={"Learn More"}
          url1="/contact"
          url2="/about"
        />

        <FAQ />
      </div>
    </>
  );
}
