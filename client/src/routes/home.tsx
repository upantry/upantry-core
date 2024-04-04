import { useNavigate } from "react-router-dom";
import { PictureAnalysisParams } from "./picture-analysis";
import { useApi } from "../http-api";

export function Home() {
    const navigate = useNavigate();
    const api = useApi();

    const onGetStartedClicked = async () => {
        // TODO get the picture
        // TODO load...

        const response = await api.getRecipe({
            picture: 'foobar',
            freeFormInstructions: [],
        })
        const state: PictureAnalysisParams = {
            analysis: response.pictureAnalysis,
            recipe: response.recipe,
        };

        navigate('/picture-analysis', { state });
    };

    return <>
        <button onClick={onGetStartedClicked}>Get Started</button>
    </>
}
