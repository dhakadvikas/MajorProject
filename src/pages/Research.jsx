import Background from "../component/Background";
import Cource from "../component/Cource";
import Discover from "../component/Discover";
import FAQ from "../component/FAQ";
import Facility from "../component/Facility";
import FeedBack from "../component/FeedBack";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Journey from "../component/Journey";
import Say from "../component/Say";
export default function Research() {
  var people = [
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
  var history = [
    {
      date: "2022",
      dHeading: "Innovation Summit",
      dPara:
        "Join us at the Innovation Summit to witness the latest advancements in technology and research.",
      dBtn1: "Register",
      dBtn2: "Learn More",
      img: "https://www.shutterstock.com/image-vector/vector-illustration-online-assistant-work-260nw-1126278371.jpg",
    },
    {
      date: "2021",
      dHeading: "Hackathon Event ",
      dPara:
        "Participate in our annual Hackathon event and showcase your coding skills.",
      dBtn1: "Register",
      dBtn2: "Learn More",
      img: "https://media.istockphoto.com/id/1210803911/vector/people-working-together-hackathon-vector-flat-illustration-programmers-work-with-data.jpg?s=612x612&w=0&k=20&c=yoTjL26kAyCebnpuA-DelwoSOf1EBmazkl8HKragWTw=",
    },
    {
      date: "2020",
      dHeading: "Research Symposium ",
      dPara:
        "Join us at the Research Symposium to explore the latest findings in the field of computer science.",
      dBtn1: "Register",
      dBtn2: "Learn More",
      img: "https://img.freepik.com/free-vector/flat-medical-conference-illustrated_23-2148885344.jpg",
    },
    {
      date: "2019",
      dHeading: "Industry Conference ",
      dPara:
        "Attend our annual Industry Conference and gain insights from industry leaders.",
      dBtn1: "Register",
      dBtn2: "Learn More",
      img: "https://img.freepik.com/premium-vector/conference-business-meeting-office-work-space-people-work-vector-isometric-3d-illustration_143808-144.jpg",
    },
    /* {
      date: "",
      dHeading: " ",
      dPara: "",
      dBtn1: "Register",
      dBtn2: "Learn More",
      img: "",
    },*/
  ];

  return (
    <>
      <div className=" bg-gray-50">
        <Background
          title={"Innovate"}
          heading={"Exploring Future Technologies"}
          para={
            "Discover the latest research initiatives and focus areas within our CSE department."
          }
          // image={"https://img.freepik.com/free-psd/metaverse-poses-backgrounds_23-2150145319.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715040000&semt=ais"}
          image={
            "https://cdn.dribbble.com/userupload/8369661/file/original-23545504aaa9e08d378c18245fbddb56.png?resize=400x0"
          }
          btn1={"Learn More"}
          // btn2={"Sign Up"}
          url1="/about"
        />
        <Facility
          heading={
            "Discover the groundbreaking research project that is revolutionizing the industry"
          }
          para={
            "Our department is proud to present a recent research breakthrough that has garnered international recognition. This project showcases our commitment to innovation and excellence."
          }
          bool={true}
          logo1="&#10065;"
          h1={"Innovation"}
          p1={
            "Explore the details of this remarkable research project and its impact on the field."
          }
          logo2="&#10065;"
          h2={"Impact"}
          p2={
            "Learn how this research breakthrough is shaping the future of the industry."
          }
          img={
            "https://cdn3d.iconscout.com/3d/premium/thumb/research-paper-4372378-3626553.png"
          }
        />
        <Cource
          title={"Innovation"}
          H1={"Advancing Technology Through "}
          H2={"Research"}
          para={"Exploring AI, Cybersecurity, and Data Science Innovations"}
          cardImg1={""}
          cardHeading1={"Research Areas"}
          cardSubHeading1={""}
          cardPara1={
            "Cutting-Edge Research in AI, Cybersecurity, and Data Science"
          }
          cardImg2={""}
          cardHeading2={"Faculty Expertise"}
          cardPara2={"Leading Experts in AI, Cybersecurity, and Data Science"}
          cardImg3={""}
          cardHeading3={"Industry Partnerships"}
          cardPara3={
            "Collaborating with Industry Leaders in AI, Cybersecurity, and Data Science"
          }
        />
        <Hero
          H1={"Ongoing Research"}
          H2={" Projects"}
          para={
            "Our ongoing research projects aim to address various objectives and utilize a range of methodologies to achieve meaningful outcomes. Through rigorous investigation and analysis, we strive to contribute to the advancement of knowledge in our field. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet in ipsum, dui lectus adipiscing elit. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse. Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.  dio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam"
          }
          img={
            "https://png.pngtree.com/png-vector/20190521/ourlarge/pngtree-illustration-research-and-development-the-concept-of-people-doing-analysis-can-png-image_1055906.jpg"
          }
          url1="/student"
          url2="/login"
        />
        <Cource
          title={"Innovators"}
          H1={"Meet Our Team"}
          para={"Get to know the faculty members driving our research."}
          CardObj={people}
        />
        <Journey
          Header={{
            title: "Discover",
            heading: "Explore our Department's Milestones and Achievements",
            para: "Learn about the groundbreaking research and achievements of our department over the years.",
            btn: "true",
            b11: "Learn More",
            b12: "Sign Up >",
            url11: "/research",
            url12: "/login",
          }}
          History={history}
        />
        <FeedBack
          rating="4.5/5"
          pImg="https://www.thefamouspeople.com/profiles/thumbs/brett-rossi-1.jpg"
          para="The research conducted by the CSE department has had a profound impact on my career. The opportunities for collaboration and the cutting-edge technologies available have allowed me to push the boundaries of my field."
          pName="Brett Rossi"
          pCompany="xTube"
        />
        <br /> <hr /> <br />
        <Hero
          H1="Explore Exciting "
          H2="Research Opportunities"
          para="Discover how you can collaborate with our department and make a difference."
          img="https://cdn3d.iconscout.com/3d/premium/thumb/man-doing-research-for-innovative-ideas-10522786-8539020.png?f=webp"
          url1="/research"
          url2="/login"
        />
        <Discover
          title={null}
          heading="Stay Informed with Our Newsletter"
          para="Get the latest research updates."
          btn={true}
          b11="Subscribe"
          b12="Sign Up >"
          url2="/login"
        />
        <FAQ />
      </div>
    </>
  );
}
