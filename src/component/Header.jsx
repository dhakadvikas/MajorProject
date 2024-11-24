import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand>
          {" "}
          <NavLink to="/" className="text-gray-900 font-black no-underline">
            {" "}
            UIT-RGPV{" "}
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto  ">
            <Nav.Link>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "900" : "500",
                  scale: isActive ? "1.1" : "none",
                })}
                className="text-gray-900  no-underline"
              >
                Home{" "}
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/About"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "900" : "500",
                  scale: isActive ? "1.1" : "none",
                })}
                className="text-gray-900  no-underline"
              >
                About{" "}
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/student"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "900" : "500",
                  scale: isActive ? "1.1" : "none",
                })}
                className="text-gray-900  no-underline"
              >
                Student{" "}
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/faculty"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "900" : "500",
                  scale: isActive ? "1.1" : "none",
                })}
                className="text-gray-900  no-underline"
              >
                Faculty{" "}
              </NavLink>
            </Nav.Link>{" "}
            <Nav.Link>
              <NavLink
                to="/academic"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "900" : "500",
                  scale: isActive ? "1.1" : "none",
                })}
                className="text-gray-900  no-underline"
              >
                Academic{" "}
              </NavLink>
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <NavLink
                  to="/research"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "900" : "500",
                    scale: isActive ? "1.1" : "none",
                  })}
                  className="text-gray-900  no-underline"
                >
                  Research{" "}
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <NavLink
                  to="/placement"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "900" : "500",
                    scale: isActive ? "1.1" : "none",
                  })}
                  className="text-gray-900  no-underline"
                >
                  Placement{" "}
                </NavLink>
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
  </NavDropdown.Item>*/}
            </NavDropdown>
            <Nav.Link>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "900" : "500",
                  scale: isActive ? "1.1" : "none",
                })}
                className="text-gray-900  no-underline"
              >
                Contact{" "}
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/login"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "900" : "500",
                  scale: isActive ? "1.1" : "none",
                })}
                className="text-gray-900  no-underline"
              >
                Login/Sign-Up{" "}
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
