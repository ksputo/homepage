import React from 'react';
import background from '../images/Katowice_Coal_Mine.jpg'
import gruba from '../images/gruba_temp.png';

export default class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logoScaledOut: false,
			cursorHidden: false
		};
	}

	componentDidMount() {
		this.pulsingLogoInterval = setInterval(() => this.setState({ logoScaledOut: !this.state.logoScaledOut }), 1000);
		this.blinkingCursor = setInterval(() => this.setState({ cursorHidden: !this.state.cursorHidden }), 500);
	}

	componentWillUnmount() {
		clearInterval(this.pulsingLogoInterval);
		clearInterval(this.blinkingCursor);
	}

	render () {
		return (<section id='landing-welcome-cover'>
			<div className='background'>
				<img src={background} />
			</div>
			<h1>Kolejno dupno rzecz je tukej <span className={this.state.cursorHidden ? 'hidden' : ''} /></h1>
			<h2>Hned</h2>
			<div className='thumbnail'><img src={gruba} className={this.state.logoScaledOut ? 'scaled-out' : ''} /></div>
			<h3>GRUBA.IT</h3>
		</section>);
	}
}