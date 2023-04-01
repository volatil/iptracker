function Bloque(props) {
	const {
		ip, ciudad, region, pais, zonahoraria, proveedor,
	} = props;
	return (
		<>
			<div>
				<p>DIRECCIÓN IP</p>
				<strong>{ip || "..."}</strong>
			</div>
			<div>
				<p>LOCACIÓN</p>
				<strong>{ciudad || "..."}, {region || "..."}, {pais || "..."}</strong>
			</div>
			<div>
				<p>ZONA HORARIA</p>
				<strong>{zonahoraria || "..."}</strong>
			</div>
			<div>
				<p>PROVEEDOR INTERNET</p>
				<strong>{proveedor || "..."}</strong>
			</div>
		</>
	);
}
export default Bloque;
