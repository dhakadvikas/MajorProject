import Background from "../component/Background";
import Facility from "../component/Facility";
import Discover from "../component/Discover";
import Say from "../component/Say";
import Cource from "../component/Cource";
import FeedBack from "../component/FeedBack";
import FAQ from "../component/FAQ";

export default function Faculty() {
  var data = [
    {
      cardImg:
      "https://www.uitrgpv.ac.in/AboutDepartment/FacultyImages/sanjay%20silakari2_260414044124.JPG",
      cardHeading: "Dr. Sanjay Silakari",
      cardSubHeading: " Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },
    {
      cardImg:
      "https://www.uitrgpv.ac.in/AboutDepartment/FacultyImages/ps3_170323030023.jpg",
      cardHeading: "Dr. Piysh Shukla",
      cardSubHeading: " Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },

    {
      cardImg:
      "https://www.uitrgpv.ac.in/AboutDepartment/FacultyImages/RP_170323025758.jpg",
      cardHeading: "Rajeev Panday",
      cardSubHeading: " Assistant Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
     },
    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/sasha-grey-1.jpg",
    //   cardHeading: "Sasha Grey",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },

    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/keiran-lee-1.jpg",
    //   cardHeading: "Keiran Lee",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },
    // {
    //   cardImg:
    //     " data:image/jpeg;base64,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",
    //   cardHeading: " Emily Willis",
    //   cardSubHeading: "Associate Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },
    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/mr-pete-49199-1.jpg",
    //   cardHeading: "Mr. Pete",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },
    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/mia-khalifa-1.jpg",
    //   cardHeading: "Mia Khalifa",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },

    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/angela-white-1.jpg",
    //   cardHeading: " Angela White",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },
    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/brandi-love-117971-1.jpg",
    //   cardHeading: "Brandi Love",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },
    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/brett-rossi-1.jpg",
    //   cardHeading: "Brett Rossi",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },
    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/manuel-ferrara-13925-1.jpg",
    //   cardHeading: "Manuel Ferrara",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },
    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/johnny-sins-1.jpg",
    //   cardHeading: "Johnny Sins",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },

    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/dani-daniels-52770-1.jpg",
    //   cardHeading: "Dani Daniels",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },
    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/brendon-miller-1.jpg",
    //   cardHeading: "Brendon Miller",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },
    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/buck-angel-1.jpg",
    //   cardHeading: "Buck Angel",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },
    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/franois-sagat-1.jpg",
    //   cardHeading: "François Sagat",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },
    // {
    //   cardImg:
    //     "https://www.thefamouspeople.com/profiles/thumbs/markus-dupree-99246-1.jpg",
    //   cardHeading: "Markus Dupree",
    //   cardSubHeading: " Professor",
    //   cardPara:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
    //   socialMedia: true,
    // },
  ];
  return (
    <>
      {" "}
      <div className="bg-gray-50">
        <Background
          heading={"Meet Our Faculty"}
          para={
            "Discover the expertise and dedication of our CSE department faculty."
          }
          image={
            "https://img.freepik.com/premium-photo/multiethnic-group-company-staff-3d-cartoon-character_75891-4096.jpg?w=996"
          }
        />

        <Facility
          heading={
            "Meet Our Esteemed Department Head and Discover Their Remarkable Achievements"
          }
          para={
            "At our department, we take pride in our exceptional faculty members who have made significant contributions to the field. Their expertise and dedication ensure a top-notch education for our students."
          }
          bool={true}
          h1={"Expertise"}
          p1={
            "Our department head and faculty members have received numerous accolades and published groundbreaking research."
          }
          h2={"Innovation"}
          p2={
            "Our faculty members are at the forefront of technological advancements and industry collaborations."
          }
          img={
            "https://thumbs.dreamstime.com/z/goal-achievement-modern-colorful-realistic-d-illustration-white-background-financial-success-business-growth-idea-bright-207564193.jpg?w=768"
          }
        />

        <Facility
          img={
            "https://www.learnpick.in/public/frontend/images/tutor.png?v=1690446327"
          }
        >
          <div>
            <h1>Faculty Specializations</h1>
            <p>
              Explore the diverse research interests and academic backgrounds of
              our faculty members.
            </p>
          </div>
          <div>
            <h1>Research Interests</h1>
            <p>
              Discover the cutting-edge research projects and collaborations
              happening in our department.
            </p>
          </div>
          <div>
            <h1>Academic Backgrounds</h1>
            <p>
              Learn about the educational qualifications and expertise of our
              esteemed faculty members.
            </p>
          </div>
        </Facility>

        <Cource
          title={"Innovate"}
          H1={"Meet Our Team"}
          para={"Get to know the brilliant minds behind our department."}
          CardObj={data}
        />

        <FeedBack
          rating="&#9733; &#9733; &#9733; &#9733; &#9733;"
          pImg={
            "https://www.thefamouspeople.com/profiles/thumbs/angela-white-1.jpg"
          }
          para={
            "The faculty at the CSE department has been instrumental in shaping my career. Their expertise and guidance have helped me develop the skills necessary to succeed in the industry."
          }
          pName={"Angela White"}
          pCompany={"XX"}
        />
        <br />
        <hr />
        <br />

        <Cource
          title={"Inspiring"}
          H1={"Transforming Education Through "}
          H2={"Innovative Teaching and Research"}
          para={
            "At our department, we believe in a collaborative approach to teaching, mentoring, and research. Our faculty members are dedicated to providing a transformative educational experience that prepares students for success in their careers."
          }
          cardImg1={""}
          cardHeading1={"Experienced Faculty"}
          cardSubHeading1={""}
          cardPara1={
            "Our faculty members are experts in their respective fields, bringing years of industry experience and academic expertise to the classroom."
          }
          cardImg2={""}
          cardHeading2={"Mentoring and Support"}
          cardSubHeading2={
            "We prioritize individualized mentoring and support for our students, ensuring they have the guidance and resources they need to succeed."
          }
          cardPara2={""}
          cardImg3={""}
          cardHeading3={"Collaborative Research Opportunities"}
          cardSubHeading3={""}
          cardPara3={
            "Our department fosters a culture of research collaboration, providing students with opportunities to work alongside faculty on cutting-edge projects."
          }
          btn1={"Learn More"}
          btn2={"Sign Up >"}
          url1="/placement"
          url2="/login"
        />

        <Discover
          heading={"Discover Our Faculty's Expertise"}
          para={"Explore the Cutting-Edge Research Conducted by Our Faculty"}
          btn={true}
          b11={"Connect"}
          b12={"Learn More "}
          url1="/contact"
          url2="/research"
        />
        <FAQ />
      </div>
    </>
  );
}
