import { useLocation, useNavigate } from "react-router-dom";
import { PictureAnalysis, Recipe } from "../Model"

export interface RecipePageParams {
    readonly recipe: Recipe;
    readonly analysis: PictureAnalysis;
}

export function RecipePage() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { analysis, recipe } = state as RecipePageParams;

    const onStartOverClicked = () => {
        navigate('/');
    };

    const onTryAgainClicked = () => {
        // TODO prompt instructions
    };

    const onTakePictureClicked = () => {
        // TODO
    };
    
    return <>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <button onClick={onStartOverClicked}>Start over</button>
        <button onClick={onTryAgainClicked}>Try something else</button>
        <button onClick={onTakePictureClicked}>Take a picture</button>
    </>
}
