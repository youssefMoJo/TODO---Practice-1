export function getCurrentDate(separator = '') {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${separator}${date}.${separator}${month < 10 ? `0${month}` : `${month}`}.${year}`
}

const Title = () => {
    return (
        <div style={{
            color: "white",
            fontSize: "35px",
            textAlign: "center",
            position: "absolute",
            width: "100%",
            marginTop: "100px",
            fontFamily: "Sofia",
            letterSpacing: "5px",
            fontWeight: "bold"
        }}>
            TODO
            <div style={{
                fontWeight: "lighter"
            }}>
                {getCurrentDate()}

            </div>
        </div>
    )
}

export default Title