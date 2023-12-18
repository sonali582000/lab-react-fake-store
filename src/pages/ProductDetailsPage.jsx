import { useParams } from "react-router-dom";

function ProductDetailsPage({ data }) {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  // const itemId = "4";
  const { productId } = useParams();
  const productCard = data.find((item) => item.id == productId);
  // To fetch the product details, set up an effect with the `useEffect` hook:
  //   useEffect(() => {
  //   // Code to run

  // }, [productId] );

  return (
    <div className="ProductDetailsPage">
      <img src={productCard.image} height={150} width={80} />
      <p>${productCard.price}</p>
    </div>
  );
}

export default ProductDetailsPage;
