import React from "react";
import "./Cart.css";

const Cart = (props) => {
	const pc = props.pc;
	const deletePlayer = props.deletePlayer;
	return (
		<div className="cart-container">
			<img src={pc.img} alt="" />
			<p>{pc.id}</p>
			<h2>{pc.name}</h2>
			<p>{pc.price}</p>
			<button onClick={() => deletePlayer(pc.id)}>DELETE</button>
		</div>
	);
};

export default Cart;
