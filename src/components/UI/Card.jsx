/* eslint-disable react/prop-types */
function Card(props) {
    let style = "card";
    if(props.className) {
        style += " " + props.className;
    } 
    return <div className={style}>{props.children}</div>
}

export default Card;
