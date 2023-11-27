import Item from "../Item/Item";
import './styles.css';

const ItemList = ({ productList }) => {
    return (
        <div className="item-list-container">
{productList.map((product) => (
            <div key={productList.id}>
                <Item
                        title={productList.title}
                        description={productList.description}
                        price={productList.price}
                        image={productList.image}
                    />
</div>
            ))}
        </div>
    )
};

export default ItemList