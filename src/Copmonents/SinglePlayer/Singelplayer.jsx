import React from "react";
import "./Singelplayer.css";

const Singelplayer = (props) => {
	const { name, id, img, price } = props.player;
	const playerHandeler = props.playerHandeler;

	return (
		<div className="player">
			<div className="player-info">
				<img src={img} alt="" />
				<p>ID: {id}</p>
				<h2>{name}</h2>
				<p>Price: ${price}</p>
			</div>
			<div className="player-btn">
				<button onClick={() => playerHandeler(props.player)}>ADD Player</button>
			</div>
		</div>
	);
};

export default Singelplayer;
