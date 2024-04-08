import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselSlide() {
  return <div style={{
    minHeight: '600px',
    height: '100%',
    background: 'black',
  }}>

  </div>
}

export function Home() {
  const navigate = useNavigate();

  const onGetStartedClicked = () => {
    navigate(`/ingredients-picture`);
  };

  return (
    <div style={{
      
    }}>
        <Carousel>
          <Carousel.Item>
            <CarouselSlide />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlide />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlide />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      <div className="d-grid mx-2 my-2" style={{flex: 0}}>
        <Button variant="primary" onClick={onGetStartedClicked}>Get Started</Button>
      </div>
    </div>
  );
}
