import { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
	const { state, getDetail } = useContext(ProductContext);
	const { id } = useParams();
	if (id) {
		useEffect(() => {
			getDetail(id);
		}, [id]);
	}

	return (
		<div>
			<h1>Chi tiet san pham</h1>
			{state.seletedProduct && <h2>{state.seletedProduct.title}</h2>}
		</div>
	);
};

export default ProductDetail;
