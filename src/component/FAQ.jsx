import Accordion from "react-bootstrap/Accordion";
export default function FAQ() {
  return (
    <>
      <br />
      <hr />
      <br />
      <div className="m-4 my-22  sm:m-4 md:px-20 md:mt-10">
        <div>
          <h1>Frequently Asked Questions </h1>
          <p>
            Find answer to common Question about the Computer Science
            program,admission and student life.
          </p>
        </div>
        <div>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is the program?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How to apply?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>what is student life like?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Are scholarships available?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit ametiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <br />
    </>
  );
}
