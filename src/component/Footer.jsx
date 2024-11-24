import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SocialMedia from "./SocialMedia";
export default function Footer() {
  return (
    <>
      <div className="sm:flex justify-between sm:item-center m-5 border-t-2 border-gray-500 pt-4">
        <div className=" sm:flex sm:item-center mb-4">
          <p>&#10127; 2024 UIT-RGPV . All right reserved. </p>{" "}
          <a href="#">Privacy Policy </a>
          <a href="#">Terms of Service </a> <a href="#">Cookies Policy. </a>{" "}
        </div>
        <div className=" gap-4 sm:flex  sm:m0-auto">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
