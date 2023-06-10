import './CartWidget.scss'

const CartWidget = ({ itemName, itemDesc }) => {

    return (
        <div className="item_container">
            <h3>{itemName}</h3>
            <img src="./cuadro.png" alt="item" className="item__img" />

            <p>{itemDesc}</p>
            <p>27</p>

        </div>
    )
}

export default CartWidget