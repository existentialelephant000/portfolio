export function ProjHeader(props) {
    const title = props.title;
    const text = props.text;
    const width = props.width;

    const containerStyle = {
        fontFamily: 'Montserrat',
        backgroundColor: '#F3F3F3',
        borderLeft:'5px',
        borderTop: '0px',
        borderRight: '0px',
        borderBottom: '0px',
        borderStyle: 'solid',
        borderColor: 'black',
        maxWidth: width
    };
    const textStyle = {
        padding: '5px',
        marginLeft: '10px',
        lineHeight: '2em'
    };
    return (
        <div class="container" style={containerStyle}>
            <div class="theProjectText" >
                <h1 class="title" style={textStyle}>{title}</h1>
                <p class="text" style={textStyle}>{text}</p>
            </div>
        </div>
    )
}
export default ProjHeader;