import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
export default function ContactInfo({
  mail = "hello@relume.io",
  phone = "+1 (555) 000-0000",
  address = "123 Sample St, Sydney NSW 2000 AU",
}) {
  return (
    <>
      <br />
      <hr />
      <br />
      <div className=" p-2 sm:p-4 sm:flex sm:justify-center item-center md:py-8 test-center ">
        <div className=" text-center p-4 sm:w-[30%]">
          <EmailOutlinedIcon className="mb-4 ml-2 scale-150" />
          <h1>Email</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <a
            href={`mailto:${mail}`}
            target="_blank"
            className="no-underline text-black"
          >
            {" "}
            {mail}{" "}
          </a>
        </div>
        <div className="text-center p-4 sm:w-[30%]">
          <LocalPhoneOutlinedIcon className="mb-4 ml-2 scale-150" />
          <h1>Phone</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <a
            href={`tel:${phone}`}
            target="_blank"
            className="no-underline text-black"
          >
            {phone}{" "}
          </a>
        </div>
        <div className="text-center p-4 sm:w-[30%]">
          <LocationOnOutlinedIcon className="mb-4 ml-2 scale-150" />
          <h1>Office</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a
            href={` http://maps.google.com/?q=${address}`}
            className="no-underline text-black "
            target="_blank"
          >
            {address}{" "}
          </a>
        </div>
      </div>
      <br />
      <hr />
      <br />
    </>
  );
}
