/* eslint-disable react/prop-types */
function Content(props) {
    return <main className={props.className}>{props.children}</main>;
}

export default Content;