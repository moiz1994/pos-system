import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CompanyRegister from "../components/Forms/CompanyRegister.js";

const FormContainer = () => {
  return (
    <Container>
      <div className="content-center">
        <Card className="card-width">
          <CardBody>
            <Row>
              <Col>
                <CompanyRegister />
              </Col>
              <Col></Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

export default FormContainer;
