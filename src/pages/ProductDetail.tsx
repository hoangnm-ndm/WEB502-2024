import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetail = () => {
	const { id } = useParams();

	const { getDetail, state } = useContext(ProductContext);

	if (id) {
		useEffect(() => {
			getDetail(id);
		}, [id]);
	}

	return (
		<div>
			<h1>Chi tiet san pham</h1>
			{state.selectedProduct && (
				<div>
					<h2>{state.selectedProduct.title}</h2>
					<p>{state.selectedProduct.price}</p>
					<button className="btn btn-danger">Add to cart</button>
				</div>
			)}
		</div>
	);
};

export default ProductDetail;
