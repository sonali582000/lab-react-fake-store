import { Link } from "react-router-dom";

function ProductListPage({ data }) {
  return (
    <div className="ProductListPage">
      {data?.map((items) => (
        <div key={items.id}>
          <Link to={`/product/details/${items.id}`}>
            <div className="listCard">
              <img
                src={items.image}
                height={100}
                width={100}
                style={{ border: "1px solid #000", margin: "5px" }}
              />
              <p>{items.title}</p>
              <p>{items.category}</p>
              <p>{items.price}</p>
              <p>{items.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
