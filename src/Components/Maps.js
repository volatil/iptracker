function Maps(props) {
	const { altoIframe, latitud, longitud } = props;
	console.debug( altoIframe );
	const url = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13415.269838936052!2d${longitud}!3d${latitud}05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1680290636824!5m2!1ses-419!2scl`;

	return (
		<section id="maps">
			<iframe
				title="nose"
				src={url}
				width="600"
				height={altoIframe}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</section>
	);
}
export default Maps;
