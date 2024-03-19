import { Card, CardBody, Col, Container, Form, Row } from "react-bootstrap";
import IconInput from "../components/IconInput.js";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const CompanyRegister = () => {
  return (
    <Container>
      <div className="content-center">
        <Card className="card-width">
          <CardBody>
            <Row>
              <Col>
                <h2 className="text-center">Company Setup</h2>
                <Form>
                  <IconInput
                    inputType="text"
                    placeholder="Company name"
                    icon={FaUser}
                  />

                  <IconInput
                    inputType="number"
                    placeholder="Mobile No"
                    icon={FaPhoneAlt}
                  />

                  <IconInput
                    inputType="email"
                    placeholder="Email Address"
                    icon={MdEmail}
                  />

                  <IconInput
                    inputType="text"
                    placeholder="Location"
                    icon={FaLocationDot}
                  />
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

export default CompanyRegister;
