import './ItemListContainer.scss'

const ItemListContainer = ({ greeting }) => {

    return (
        <div className="list_container">
            <h2>Nuestros Destacados</h2>
            <hr />

            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer