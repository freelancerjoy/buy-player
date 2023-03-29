import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Copmonents/Header/Header";
import Players from "./Copmonents/Players/Players";

function App() {
	return (
		<div className="App">
			<>
				<Header></Header>
				<Players></Players>
			</>
		</div>
	);
}

export default App;
