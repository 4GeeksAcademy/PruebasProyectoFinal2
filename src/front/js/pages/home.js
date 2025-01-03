// import React, { useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/LogoCepda.png";
// import "../../styles/home.css";

// export const Home = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="text-center mt-5">
// 			<h1>CEPDA Control Panel</h1>
// 			<p>
// 				<img src={rigoImageUrl} />
// 			</p>
// 			<div className="alert alert-info">
// 				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
// 			</div>
// 			<p>
// 				This boilerplate comes with lots of documentation:{" "}
// 				<a href="https://start.4geeksacademy.com/starters/react-flask">
// 					Read documentation
// 				</a>
// 			</p>
// 		</div>
// 	);
// };


import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { JumbotronCarousel } from "../component/jumbocarousel";
import "../../styles/home.css";
import { NewsSection } from "../component/NewsSection";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<>
		
		<JumbotronCarousel/>
		<div className="container mt-4">
			<h1> 
				El cambio ya empezó, el momento de sumarse es ahora!
			</h1>
			<p>
			Trabajamos para disminuir el impacto ambiental y generar acciones positivas para el planeta y la sociedad. 
			Te ofrecemos las mejores soluciones eco-friendly para tu empresa. El cambio ya empezó, el momento de sumarse es ahora!
			</p>
			<p>
			Como funciona <strong>Zepda Eco-logistics</strong>?
			</p>
			<p>
			En esta plataforma podrás encontrar soluciones sostenibles para que tu empresa sea más eco-friendly. 
			Podrás encontrar servicios que te ayudarán a disminuir el impacto ambiental de tu empresa. Además, 
			podrás conocer el impacto positivo que generas al adquirir estos productos y servicios.
			Sólo tienes que crear una cuenta en nuestra plataforma y empezar a disfrutar de los beneficios de ser eco-friendly.
			</p>
			{/* <button className="btn">súmate al cambio</button>

			<NewsSection/> */}

		</div>
		</>
	);
};
