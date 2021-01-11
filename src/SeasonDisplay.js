import React from 'react';
import './SeasonDisplay.css';

const getSeasons = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat < 0 ? 'summer' : 'winter';
	}
};
const SeasonDisplay = (props) => {
	const season = getSeasons(props.latitude, new Date().getMonth());
	const icon = season === 'winter' ? 'snowflake' : 'sun';
	return (
		<div className={`season-display ${season}`}>
			<i className={` icon-left massive ${icon} icon`} />
			<h1>
				{season === 'winter' ? 'Burr, its cold outside' : 'Lets hit the beach'}
			</h1>
			<i className={`icon-right massive ${icon} icon`} />
		</div>
	);
};

export default SeasonDisplay;
