/* eslint-disable react/prop-types */
function DisplayCard({flex = false, className, children}) {
    let style = flex ? "flex-card" : "card";
    if(className) {
        style += ` ${className}`;
    } 
    return <div className={style}>{children}</div>
}

export default DisplayCard;
