import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function socialMedia() {
  return (
    <>
      <div>
        <FacebookIcon className="mx-1 text-blue-500 hover:text-blue-900 hover:cursor-pointer" />
        <InstagramIcon className=" mx-1 text-red-300 hover:text-red-500 hover:cursor-pointer" />
        <LinkedInIcon className="mx-1 text-blue-400 hover:text-blue-700 hover:cursor-pointer" />
        <XIcon className="mx-1 text-gray-500 hover:text-gray-900 hover:cursor-pointer" />
      </div>
    </>
  );
}
