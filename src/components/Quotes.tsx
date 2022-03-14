import { useReducer } from "react";

type dataProprieties = {
	id: number;
	name: string;
	quotes: string;
	urlPicture: string;
};

type QuotesProps = {
	data: dataProprieties[];
};

type ReducerState = {
	indexData: number;
};

type ReducerAction = {
	type: "suivant" | "précédent" | "random";
	payload: any;
};

export const Quotes = ({ data }: QuotesProps) => {
	const sizeDataArray = data.length;
	const randomIndex = Math.trunc(Math.random() * sizeDataArray - 1);
	const initialState = {
		indexData: 0,
	};

	const reducer = (state: ReducerState, action: ReducerAction) => {
		switch (action.type) {
			case "suivant": {
				return { indexData: state.indexData + action.payload };
			}
			case "précédent": {
				return { indexData: state.indexData - action.payload };
			}
			case "random": {
				return { indexData: (state.indexData = action.payload) };
			}
			default:
				return initialState;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<section className="container-quotes">
			<h2 className="no-display">Citation</h2>
			<div className="quote">
				<h2>Autheur : {data[state.indexData].name}</h2>
				<p>Citation : {data[state.indexData].quotes}</p>
				<div className="btns-container">
					{state.indexData == 0 ? (
						<button disabled onClick={() => dispatch({ type: "précédent", payload: 1 })}>
							Précédent
						</button>
					) : (
						<button onClick={() => dispatch({ type: "précédent", payload: 1 })}>Précédent</button>
					)}
					{state.indexData == sizeDataArray - 1 ? (
						<button disabled onClick={() => dispatch({ type: "suivant", payload: 1 })}>
							Suivant
						</button>
					) : (
						<button onClick={() => dispatch({ type: "suivant", payload: 1 })}>Suivant</button>
					)}
					<button onClick={() => dispatch({ type: "random", payload: randomIndex })}>Aléatoire</button>
				</div>
			</div>
			<div className="picture-author">
				<label htmlFor="check">checkBox</label>
				<input type="checkbox" id="check"/>
				<img className="author-picture" src={data[state.indexData].urlPicture} alt="author" />
			</div>
		</section>
	);
};
