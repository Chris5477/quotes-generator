import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Quotes } from "./components/Quotes";
import data from "./assets/data.json"

function App() {

	const styleHeader = {
		backgroundColor : "#6c44ac",
		color : "white",
		borderBottom : "2px solid white",
		width : "100%",
		height : "200px",
		display : "flex",
		justifyContent : "center",
		alignItems : "center",
		fontSize : "24px"
	}

	const styleFooter = {
		borderTop : "2px solid #6c44ac"
	}

	return (
		<div className="App">
			<Header styles={styleHeader}/>
			<Quotes data={data}/>
			<Footer styles={styleFooter} />
		</div>
	);
}

export default App;
