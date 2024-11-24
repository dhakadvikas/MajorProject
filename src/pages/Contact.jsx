import ContactInfo from "../component/ContactInfo";
import Opportunities from "../component/Opportunities";
import Touch from "../component/Touch";
import Cource from "../component/Cource";
import FAQ from "../component/FAQ";
import Hero from "../component/Hero";

export default function Contact() {
  var data = [
    /* {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/saori-hara-129187-1.jpg",
      cardHeading: "Saori Hara",
      cardSubHeading: " Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },
    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/michael-lucas-1.jpg",
      cardHeading: "Michael Lucas",
      cardSubHeading: " Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },

    {
      cardImg:
        "data:image/jpeg;base64,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",
      cardHeading: "Aino Kishi.",
      cardSubHeading: " Assistant Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },
    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/sasha-grey-1.jpg",
      cardHeading: "Sasha Grey",
      cardSubHeading: " Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },

    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/keiran-lee-1.jpg",
      cardHeading: "Keiran Lee",
      cardSubHeading: " Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },
    {
      cardImg:
        " data:image/jpeg;base64,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",
      cardHeading: " Emily Willis",
      cardSubHeading: "Associate Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },*/
    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/mr-pete-49199-1.jpg",
      cardHeading: "Mr. Pete",
      cardSubHeading: " Department Head",
      cardPara:
        "Responsible for overseeing the department's operations and strategic direction.",
      socialMedia: true,
    },
    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/mia-khalifa-1.jpg",
      cardHeading: "Mia Khalifa",
      cardSubHeading: "Administrative Staff",
      cardPara:
        "Provides administrative support to the department and assists with day-to-day operations.",
      socialMedia: true,
    },

    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/angela-white-1.jpg",
      cardHeading: " Angela White",
      cardSubHeading: " Academic Advisor",
      cardPara:
        "Offers guidance and support to students regarding their academic journey in the department.",
      socialMedia: true,
    },
    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/brandi-love-117971-1.jpg",
      cardHeading: "Brandi Love",
      cardSubHeading: "Placement Coordinator",
      cardPara:
        "Assists students in finding internship and job placement opportunities.",
      socialMedia: true,
    },
    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/brett-rossi-1.jpg",
      cardHeading: "Brett Rossi",
      cardSubHeading: " Research Coordinator",
      cardPara:
        "Oversees research projects and facilitates collaboration within the department.",
      socialMedia: true,
    },
    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/manuel-ferrara-13925-1.jpg",
      cardHeading: "Manuel Ferrara",
      cardSubHeading: " Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    } /*
    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/johnny-sins-1.jpg",
      cardHeading: "Johnny Sins",
      cardSubHeading: " Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },

    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/dani-daniels-52770-1.jpg",
      cardHeading: "Dani Daniels",
      cardSubHeading: " Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },
    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/brendon-miller-1.jpg",
      cardHeading: "Brendon Miller",
      cardSubHeading: " Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },
    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/buck-angel-1.jpg",
      cardHeading: "Buck Angel",
      cardSubHeading: " Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },
    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/franois-sagat-1.jpg",
      cardHeading: "François Sagat",
      cardSubHeading: " Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },
    {
      cardImg:
        "https://www.thefamouspeople.com/profiles/thumbs/markus-dupree-99246-1.jpg",
      cardHeading: "Markus Dupree",
      cardSubHeading: " Professor",
      cardPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida.",
      socialMedia: true,
    },*/,
  ];
  return (
    <>
      <div className="px-4 bg-gray-50">
        <br />
        <Opportunities
          bool={false}
          heading={"Welcome to "}
          para={
            "Get in touch with the CSE department to explore opportunities and learn more about our programs."
          }
        />
        <br />

        <ContactInfo
          mail={" uit_director@rgpv.ac.in"}
          phone={"+91-8989205805"}
          address={
            "8966+3M7, Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh 462033"
          }
        />

        <Cource
          title={"Discover"}
          H1={"Locations"}
          para={"Visit our department at one of our convenient locations."}
          cardImg1={
            "https://img.freepik.com/premium-photo/illustration-sydney-opera-house-3d-depiction-unique_945369-10504.jpg"
          }
          cardHeading1={"Sydney"}
          cardSubHeading1={""}
          cardPara1={"123 Sample St, Sydney NSW 2000 AU"}
          cardImg3={
            "https://png.pngtree.com/background/20240221/original/pngtree-explore-the-iconic-landmarks-of-new-york-city-usa-for-your-picture-image_7785391.jpg"
          }
          cardHeading3={"New York"}
          cardPara3={"123 Sample St, New York NY 10000 USA"}
        />
        <Cource
          title={"Innovate"}
          H1={"Meet Our Team"}
          para={"Get to know the brilliant minds behind our department."}
          CardObj={data}
        />

        <Hero
          H1={"Stay Updated with Our "}
          H2={"Newsletter"}
          para={"Get the latest news and updates from our department."}
          img={
            "https://img.freepik.com/premium-vector/subscribe-news-horizontal-template-with-3d-elements-invitation-subscribe-site-application-updates-color-web-design-cartoon-style-illustration-with-text-button-email-box_913036-734.jpg"
          }
        />
        <FAQ />
      </div>
    </>
  );
}
