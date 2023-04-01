import { useEffect, useState } from "react";

import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

import fetchIPJSON from "../Helpers/Helpers";

import Bloque from "../Components/Bloque";
import Maps from "../Components/Maps";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [ESTADOtodo, setESTADOtodo] = useState("");
	const [altoIframeAjustado, setaltoIframeAjustado] = useState();

	function trae(laip) {
		fetchIPJSON(laip).then((dataip) => {
			setESTADOtodo(dataip);
		});
	}

	const generaPeticion = () => {
		const valor = document.querySelector(".inputBuscador").value;
		trae(valor);
	};

	const altoMapa = function () {
		const elheader = document.querySelector("header");
		const altoPantalla = window.screen.height;
		let altoHeader = 300;
		let total = 20;

		if ( elheader ) {
			altoHeader = elheader.clientHeight;
			total = Number(altoPantalla) - Number(altoHeader) - 10;
			return total;
		}

		return total;
	};

	useEffect(() => {
		trae();
		setaltoIframeAjustado(altoMapa());
	}, []);

	return (
		<>
			<Head>
				<title>IPTracker</title>
				<meta name="description" content="IPTracker App" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section id="iptracker">
				<header>
					<div className="titulo">
						<h1>IP Tracker</h1>
					</div>
					<form>
						<input className="inputBuscador" type="text" placeholder={ESTADOtodo.ip} />
						<button type="button" onClick={generaPeticion}>
							<img src="/assets/svg/arrowright.svg" alt="Buscar" />
						</button>
					</form>
					<div className="panel">
						<Bloque ip={ESTADOtodo.ip} ciudad={ESTADOtodo.city} region={ESTADOtodo.region} pais={ESTADOtodo.country} zonahoraria={ESTADOtodo.timezone} proveedor={ESTADOtodo.org} />
					</div>
				</header>
				<Maps altoIframe={altoIframeAjustado} latitud={ESTADOtodo.latitude} longitud={ESTADOtodo.longitude} />
			</section>
		</>
	);
}
