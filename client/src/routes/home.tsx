import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ActionBar, Content, Page } from "../layout";
import { AnimatedCounter } from "react-animated-counter";
import { useEffect, useState } from "react";

function CarouselSlide(props: {
  image: string,
}) {
  return (
    <div
      style={{
        minHeight: "200px",
        height: "100%",
        background: "black",
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
      }}
    ></div>
  );
}

export function Home() {
  const navigate = useNavigate();

  const onGetStartedClicked = () => {
    navigate(`/ingredients-picture`);
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  })

  return (
    <Page>
      <Content>
        <Carousel>
          <Carousel.Item>
            <CarouselSlide image="/slide1.jpg" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <CarouselSlide image="/slide2.jpg" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <CarouselSlide image="/slide3.jpg" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <CarouselSlide image="/slide4.jpg" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      
        <Button variant="primary" onClick={onGetStartedClicked}>
          Get Started
        </Button>

        <div
          className="counter-container"
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "1rem",
          }}
        >
          <AnimatedCounter
            value={count}
            includeDecimals={false}
            color="black"
            fontSize="40px"
          />
        </div>

        <h2>Recently enjoyed plates</h2>
      </Content>

      <ActionBar>
        <div className="d-grid mx-2 my-2" style={{ flex: 0 }}>
        </div>
      </ActionBar>
    </Page>
  );
}
