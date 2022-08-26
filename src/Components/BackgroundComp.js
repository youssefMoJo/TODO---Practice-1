import backgroundImg from "../img/background.jpg"

function BackgroundComp() {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImg})`,
            height: "400px",
            position: "absolute",
            width: "100%",
        }}>

        </div>
    )
}

export default BackgroundComp;

