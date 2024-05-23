import "./App.css";
import { Container, Row, Col, Button, Form, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Container fluid>
      {/**first page  */}

      <Row
        style={{
          backgroundImage: 'url("images/Group 2246.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            height: "120px",
            marginLeft: "-10rem",
          }}
        >
          <Button
            style={{
              background: "#feb51e",
              color: "white",
              font: "18px/22px Proxima Nova",
              border: "none",
              borderRadius: "5px",
              height: "50px",
              width: "100px",
              display: "flex",
              justifySelf: "end",
              alignItems: "center",
            }}
          >
            Let's Talk
          </Button>
        </Row>

        <Row>
          <Col
            style={{
              color: "white",
              paddingLeft: "10rem",
            }}
          >
            <h2 className="TitleTxt">Our Resources,</h2>
            <h2 className="TitleTxt">Events & Webinars</h2>
            <p className="Ptext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eleifend augue lorem, sed lacinia nunc pellentesque sed.
              Vestibulum id gravida arcu. Fusce a odio id tortor lobortis
              auctor. In rutrum nunc scelerisque, consectetur dui vitae,
              elementum odio. Maecenas nec pretium lorem, sit amet sodales
              mauris. Sed rhoncus imperdiet nulla. Nunc tincidunt fringilla.
            </p>
          </Col>
          <Col style={{ marginLeft: "-10rem" }}>
            <Form className="Form">
              <p className="FormTitle">Get Started</p>
              <div className="FormRow1">
                <Form.Group
                  controlId="formBasicFirstName"
                  style={{ width: "300px" }}
                >
                  <Form.Label className="FormLabel">First Name*</Form.Label>
                  <Form.Control
                    type="First Name"
                    placeholder=""
                    required
                    className="FormControl"
                  />
                </Form.Group>

                <Form.Group
                  controlId="formBasicLastName"
                  style={{ width: "300px", marginLeft: "4.5rem" }}
                >
                  <Form.Label className="FormLabel">Last Name*</Form.Label>
                  <Form.Control
                    type="Last Name"
                    required
                    className="FormControl"
                  />
                </Form.Group>
              </div>

              <div className="FormRow1">
                <Form.Group
                  controlId="formBasicPhoneNumber"
                  style={{ width: "300px" }}
                >
                  <Form.Label className="FormLabel">Work Phone*</Form.Label>
                  <Form.Control
                    type="Work Phone"
                    required
                    className="FormControl"
                  />
                </Form.Group>

                <Form.Group
                  controlId="formBasicEmail"
                  style={{ width: "300px", marginLeft: "4.5rem" }}
                >
                  <Form.Label className="FormLabel">Work Email*</Form.Label>
                  <Form.Control
                    type="Work Email"
                    required
                    className="FormControl"
                  />
                </Form.Group>
              </div>

              <Form.Group
                controlId="formBasicCompanyName"
                style={{ width: "670px", marginLeft: "4rem" }}
              >
                <Form.Label>Company*</Form.Label>
                <Form.Control type="Company" required />
              </Form.Group>

              <Form.Check
                className="FormCheck"
                type="checkbox"
                label="Your contact information, including email,may be shared within our company for the purpose of following up on your interests."
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Button
                  className="FormButton"
                  style={{
                    background: "#3fb0a9",
                    border: "none",
                    borderRadius: "6px",
                    width: "330px",
                    height: "40px",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Let's Talk
                </Button>
              </div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "15px",
                  marginTop: "5px",
                }}
              >
                Already have an account?{" "}
                <a style={{ color: "#3FB0A9" }} href="/">
                  Log in
                </a>
              </p>
            </Form>
          </Col>
        </Row>
      </Row>

      {/**Second page  */}

      <p
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "24px",
        }}
      >
        Business leaders at fast-growing companies choose us
      </p>
      <div className="LogoName">
        <h1>Logo/Name</h1>
        <h1>Logo/Name</h1>
        <h1>Logo/Name</h1>
        <h1>Logo/Name</h1>
        <h1>Logo/Name</h1>
        <h1>Logo/Name</h1>
      </div>

      <Row
        style={{
          marginTop: "5rem",
          marginLeft: "10rem",
        }}
      >
        <Col>
          <p style={{ fontSize: "60px", width: "600px", textAlign: "left" }}>
            <span style={{ color: "#6eb462" }}>Shipping </span>
            <span style={{ color: "#3fb0a9" }}>Demands</span> are{" "}
            <span style={{ color: "#3fb0a9" }}>increasing</span>
          </p>

          <p style={{ width: "600px", fontSize: "18px", textAlign: "left" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
            nisi ac neque suscipit tincidunt. Cras elementum id dui porttitor
            mollis. Integer vel ante sit amet turpis tempor dictum. Cras ut
            faucibus augue. Sed nibh libero, pretium quis luctus a, vehicula sed
            ipsum. Vestibulum orci magna, ornare nec viverra pretium, sagittis
            quis tortor. Praesent porttitor mauris a tortor ornare accumsan.
            Morbi vehicula porta nulla. Nullam volutpat ligula arcu, sed rutrum
            mi scelerisque.
          </p>
        </Col>
        <Col>
          <img src="images/Group 2281.png" />
        </Col>
      </Row>

      <Row
        style={{
          marginLeft: "10rem",
          marginTop: "3rem",
        }}
      >
        {" "}
        <Col>
          <p style={{ fontSize: "60px", width: "500px", textAlign: "left" }}>
            <span style={{ color: "#6eb462" }}>Multi-Carrier </span>
            Shipping <span style={{ color: "#3fb0a9" }}>Software</span>
          </p>

          <p style={{ width: "600px", fontSize: "18px", textAlign: "left" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
            nisi ac neque suscipit tincidunt. Cras elementum id dui porttitor
            mollis. Integer vel ante sit amet turpis tempor dictum. Cras ut
            faucibus augue. Sed nibh libero, pretium quis luctus a, vehicula sed
            ipsum. Vestibulum orci magna, ornare nec viverra pretium, sagittis
            quis tortor. Praesent porttitor mauris a tortor ornare accumsan.
            Morbi vehicula porta nulla. Nullam volutpat ligula arcu, sed rutrum
            mi scelerisque.
          </p>
        </Col>
        <Col style={{ marginTop: "2rem" }}>
          <img src="images/Group 2280.png" />
        </Col>
      </Row>

      <Row>
        <p
          style={{
            fontSize: "69px",
            width: "1200px",
            marginLeft: "20rem",
            marginTop: "10rem",
            marginBottom: "0.1rem",
          }}
        >
          Highly scalable, multi-carrier{" "}
          <span style={{ color: "#3fb0a9" }}> shipping software </span>that
          gives you control over order fulfillment
        </p>
        <div style={{ display: "flex" }}>
          <a
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginLeft: "20rem",
              marginTop: "10px",
            }}
          >
            Learn More
          </a>
          <img
            src="images/right-arrow.png"
            style={{ width: "50px", marginLeft: "15px" }}
          />
        </div>
      </Row>

      <Row style={{ marginTop: "5rem" }}>
        <p style={{ fontSize: "60px", color: "#3fb0a9", marginLeft: "20rem" }}>
          Testimonals
        </p>
      </Row>
      <Row>
        {" "}
        <Carousel style={{ width: "100vw" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/Scroll Group 24.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/Scroll Group 24.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/Scroll Group 24.png"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Row>

      <Row style={{ background: "#FBFBFB" }}>
        <p
          style={{
            fontSize: "60px",
            color: "#0E2E3A",
            marginLeft: "10rem",
            marginTop: "10rem",
            marginBottom: "2rem",
          }}
        >
          Getting started is easy...
        </p>
        <Col style={{ marginLeft: "10rem" }}>
          <p style={{ fontSize: "40px", color: "#0E2E3A", width: "330px" }}>
            Consultation & customized demo
          </p>
          <div style={{ display: "flex" }}>
            <p
              style={{
                color: "#316672",
                fontSize: "60px",
                marginRight: "0.5rem",
                marginTop: "-1rem",
              }}
            >
              1
            </p>
            <p style={{ fontSize: "16px", color: "#0E2E3A", width: "330px" }}>
              Consultation on fulfillment efficiency, your current processes,
              the goals you would like to achieve & best practices on
              configuring your parcel and LTL operations process for scale.
            </p>
          </div>
          <Button
            className="FormButton"
            style={{
              background: "#FEB51E",
              border: "none",
              borderRadius: "5px",
              width: "200px",
              height: "40px",
              color: "white",
              fontSize: "18px",
              marginTop: "1rem",
            }}
          >
            Let's Talk
          </Button>
        </Col>

        <Col>
          <p style={{ fontSize: "40px", color: "#0E2E3A", width: "330px" }}>
            Validation & project proposal
          </p>
          <div style={{ display: "flex" }}>
            <p
              style={{
                color: "#3FB0A9",
                fontSize: "60px",
                marginRight: "0.5rem",
                marginTop: "-1rem",
              }}
            >
              2
            </p>
            <p style={{ fontSize: "16px", color: "#0E2E3A", width: "330px" }}>
              Technical validation with our solution engineers to capture
              project requirements, define scope, and provide a cost estimate.
              Project proposal review to agree on project scope.
            </p>
          </div>
        </Col>

        <Col>
          <p style={{ fontSize: "40px", color: "#0E2E3A", width: "330px" }}>
            Implementation & Support
          </p>
          <div style={{ display: "flex" }}>
            <p
              style={{
                color: "#6EB462",
                fontSize: "60px",
                marginRight: "0.5rem",
                marginTop: "-1rem",
              }}
            >
              3
            </p>
            <p style={{ fontSize: "16px", color: "#0E2E3A", width: "330px" }}>
              Support every step of the way in account and business rule
              management from our customer success team to help you maximize
              your return on investment.
            </p>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          background: "#0E2E3A",
          height: "130px",
          width: "100vw",
          marginTop: "10rem",
        }}
      >
        <p
          style={{
            color: "#787878",
            fontSize: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          © LOGO 2023 All Rights Reserved
        </p>
      </Row>
    </Container>
  );
}

export default App;
