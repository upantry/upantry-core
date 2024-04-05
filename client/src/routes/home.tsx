import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const onGetStartedClicked = () => {
    navigate(`/ingredients-picture`);
  };

  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onGetStartedClicked}>Get Started</button>
    </>
  );
}
