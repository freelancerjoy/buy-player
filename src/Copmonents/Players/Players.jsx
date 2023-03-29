import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Singelplayer from "../SinglePlayer/Singelplayer";
import "./Player.css";

const Players = () => {
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		fetch("../../../public/players.json")
			.then((res) => res.json())
			.then((data) => setPlayers(data));
	}, [players]);

	const [playerPrice, setplayerPrice] = useState([]);
	const playerHandeler = ({ id }) => {
		const search = players.find((players) => players.id === id);

		const uniq = playerPrice.find((exist) => exist.id === id);

		if (uniq?.id === id) {
			alert("allredy exist");
		} else {
			const newPlayer = [...playerPrice, search];
			setplayerPrice(newPlayer);
		}
		console.log(playerPrice);
	};

	const deletePlayer = (id) => {
		const dp = playerPrice.filter((player) => player.id !== id);
		setplayerPrice(dp);
	};

	return (
		<div className="players-section">
			<div className="player-container">
				{players.map((player) => (
					<Singelplayer player={player} playerHandeler={playerHandeler} />
				))}
			</div>
			<div className="side-bar">
				{playerPrice.map((pc) => (
					<Cart pc={pc} deletePlayer={deletePlayer}></Cart>
				))}
			</div>
		</div>
	);
};

export default Players;
