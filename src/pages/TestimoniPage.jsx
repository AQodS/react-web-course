import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";

import FAQComponent from "../components/FAQComponent";

const TestimoniPage = () => {
  return (
    <div className="testimoni-page">
      <div className="testimoni">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">Semua Testimoni</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                perspiciatis?
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className="mb-5">
                  <p className="desc shadow rounded p-4 mb-4">{data.desc}</p>
                  <div className="people ps-4">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="m-0 fw-bold">{data.skill}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FAQComponent />
    </div>
  );
};

export default TestimoniPage;
