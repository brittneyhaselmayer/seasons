import React from 'react';
import reactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
	state = {
		lat: null,
		errorMessage: '',
	};
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			// (position) => console.log({ lat: position.coords.latitude }),
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}
	render() {
		if (this.state.lat && !this.state.errorMessage) {
			return <SeasonDisplay latitude={this.state.lat} />;
		}
		if (!this.state.lat && this.state.errorMessage) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		return <div>Loading!!</div>;
	}
}

reactDOM.render(<App />, document.querySelector('#root'));
