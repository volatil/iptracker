export default async function fetchIPJSON(laip) {
	// 200.120.165.198
	// 181.203.95.184
	let url = "https://ipapi.co/200.120.165.198/json/";
	if ( laip ) {
		url = `https://ipapi.co/${laip}/json/`;
	}
	const response = await fetch(url);
	const dataip = await response.json();
	return dataip;
}
