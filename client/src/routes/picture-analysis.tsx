import { useLocation, useNavigate } from "react-router-dom";
import { PictureAnalysis, Recipe } from "../Model";
import { RecipePageParams } from "./recipe";

export interface PictureAnalysisParams {
    readonly analysis: PictureAnalysis;
    readonly recipe: Recipe;
}

export function PictureAnalysisPage() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { analysis, recipe } = state as PictureAnalysisParams;

    const onCancelClicked = () => {
        navigate('/');
    };

    const onConfirmClicked = () => {
        const state: RecipePageParams = {
            recipe,
            analysis,
        };

        navigate('/recipe', { state });
    };

    return <>
        <p>Are those the ingredients?</p>
        <ul>
          {analysis.items.map(item => {
            return <li>{item}</li>
          })}
        </ul>
        <button onClick={onConfirmClicked}>That looks right</button>
        <button onClick={onCancelClicked}>That's not it</button>
      </>
}
