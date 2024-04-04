export function TakePictureScreen(props: {
    onPictureTaken: (picture: string) => void,
}) {
    return <>
        <button onClick={() => props.onPictureTaken('zeepic')}>Plz taek pic</button>
    </>
}
