import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ActionBar, Content, Page } from "../layout";
import { AnimatedCounter } from "react-animated-counter";
import { useEffect, useState } from "react";

function CarouselSlide(props: { image: string }) {
  return (
    <div
      style={{
        minHeight: "200px",
        height: "100%",
        background: "black",
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        filter: 'brightness(70%)'
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
  });

  return (
    <Page>
      <Content>
        <Carousel>
          <Carousel.Item>
            <CarouselSlide image="/slide2.jpg" />
            <Carousel.Caption>
              <h3>Cook with AI</h3>
              <p>Cook more, spend less and save planet</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlide image="/slide4.jpg" />
            <Carousel.Caption>
              <h3>Small Kitchen, Big Impact</h3>

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
    color="white"
    fontSize="40px"
  />
  Recipes Generated
</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlide image="/slide3.jpg" />
            <Carousel.Caption>
              <h3>Our Mission</h3>
              <p>109 billion lbs are wasted every year in the US. Help us fight it!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Button variant="primary" onClick={onGetStartedClicked}>
          Get Started
        </Button>

        <h2>Cook More, Spend Less</h2>
        <p>We believe <strong>big changes start with small habits</strong>. Bring your own bags, ditch disposables, and fight food waste!</p>


        <h2>Did you know?</h2>
        <p>In America, <strong>nearly 40% of the food supply is wasted every year</strong>. That translates to hundreds of dollars worth of groceries wasted per person annually.</p>
        <p>This has major environmental consequences. Food waste takes up a huge portion of landfill space, releasing harmful greenhouse gasses as it decomposes.  In fact, <strong>it's the single largest component of municipal solid waste in the country</strong>.</p>

        <h2>Mission</h2>
        <p>Our goal is to optimize your pantry by crafting delicious and sustainable meals from existing groceries.</p>
        <p>This approach emphasizes maximizing the value of your current ingredients while minimizing waste and environmental impact.</p>

        <p style={{textAlign: 'center', fontSize: '0.8em', marginTop: '50px'}}>Made with ♥ in Cambridge, ON</p>
      </Content>

      <ActionBar>
        <div className="d-grid mx-2 my-2" style={{ flex: 0 }}></div>
      </ActionBar>
    </Page>
  );
}
