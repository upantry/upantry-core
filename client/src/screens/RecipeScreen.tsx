import { Recipe } from "../Recipe";

export function RecipeScreen(props: {
    recipe: Recipe,
    onBackClicked: () => void,
}) {
    return <>
        <p>Here's your recipe:</p>
        <h1>{props.recipe.title}</h1>
        <p>{props.recipe.description}</p>
        <button onClick={props.onBackClicked}>Back</button>
      </>
}
