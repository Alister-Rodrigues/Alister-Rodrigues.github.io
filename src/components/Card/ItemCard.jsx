/* eslint-disable react/prop-types */
function ItemCard({className, children}) {
    return (
        <div className={"item-card" + (className ? ` ${className}` : "")}>
            {children}
        </div>
    )
}

export default ItemCard;