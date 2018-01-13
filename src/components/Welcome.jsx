import React from 'react';
import background from '../images/Katowice_Coal_Mine.jpg'
import gruba from '../images/gruba_temp.png';

export default class Welcome extends React.Component {
	render () {
		return (<section id='landing-welcome-cover'>
			<div className='background'>
				<img src={background} />
			</div>
			<h1>Kolejno dupno rzecz je tukej</h1>
			<h2>Hned</h2>
			<div className='thumbnail'><img src={gruba} /></div>
			<h3>GRUBA.IT</h3>
		</section>);
	}
}