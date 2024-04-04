import { PictureAnalysis } from "../PictureAnalysis";

export function AnalysisConfirmationScreen(props: {
    analysis: PictureAnalysis,
    onConfirmClicked: () => void,
    onCancelClicked: () => void,
}) {
    return <>
        <p>Are those the ingredients?</p>
        <ul>
          {props.analysis.items.map(item => {
            return <li>{item}</li>
          })}
        </ul>
        <button onClick={props.onConfirmClicked}>That looks right</button>
        <button onClick={props.onCancelClicked}>That's not it</button>
      </>
}
