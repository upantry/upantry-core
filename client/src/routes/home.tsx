import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const onGetStartedClicked = () => {
    navigate(`/ingredients-picture`);
  };

  return (
    <>
      <button onClick={onGetStartedClicked}>Get Started</button>
    </>
  );
}
