import { Link } from "react-router-dom";

export function Button(props) {
    const link = props.link;
    const text = props.text;
    const color = props.color;
    const width = props.width;

    const containerStyle = {
        display: 'inline-block',
        fontFamily: 'Montserrat',
        backgroundColor: color,
        borderLeft:'3px',
        borderTop: '3px',
        borderRight: '3px',
        borderBottom: '3px',
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: '10px',
        minWidth: width,
        minHeight: '3vw',
        verticalAlign: 'middle'
    };

    const textStyle = {
        alignSelf: 'center',
        margin: '2vw',
        fontFamily: 'Montserrat',
        color: 'black',
        textDecoration: 'none',
        fontWeight: '700'
    };

    return (
        <div class="container" style={containerStyle}>
            <a style={textStyle} target="_blank" href={link}>{text}</a>
        </div>
    )
}
export default Button;