import React from 'react';

const getSeasons = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat < 0 ? 'summer' : 'winter';
	}
};
const SeasonDisplay = (props) => {
	const season = getSeasons(props.latitude, new Date().getMonth());
	console.log(season);
	return (
		<h1>
			{season === 'winter' ? 'Burr, its cold outside' : 'Lets hit the beach'}
		</h1>
	);
};

export default SeasonDisplay;
