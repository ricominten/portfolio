/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

import {title} from './Bio.styles';

const Bio = () => {
	return (
		<div>
			<code css={title}>
				<span>____/\\\\\\\\\________/\\\\\\\\\\\___</span>
				<span>&nbsp;__/\\\///////\\\_____\/////\\\///____</span>
				<span>&nbsp;&nbsp;_\/\\\_____\/\\\_________\/\\\_______</span>
				<span>&nbsp;&nbsp;&nbsp;_\/\\\\\\\\\\\/__________\/\\\_______</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;_\/\\\//////\\\__________\/\\\_______</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_\/\\\____\//\\\_________\/\\\_______</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_\/\\\_____\//\\\________\/\\\_______</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_\/\\\______\//\\\____/\\\\\\\\\\\___</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_\///________\///____\///////////____</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________/\\\\\\\\\_______/\\\\\______</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____/\\\////////______/\\\///\\\____</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___/\\\/_____________/\\\/__\///\\\__</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__/\\\______________/\\\______\//\\\_</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_\/\\\_____________\/\\\_______\/\\\_</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_\//\\\____________\//\\\______/\\\__</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__\///\\\___________\///\\\__/\\\____</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____\////\\\\\\\\\____\///\\\\\/_____</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______\/////////_______\/////_______</span>
			</code>
			<br/><br/>
			<p>
				Rico is a front-end developer in Sydney, currently working on large scale builds for Deloitte Digital clients.
				With a background in industrial design, he tries to create interfaces and front-end systems that work for everyone, and that support accessibility needs.
			</p>
			<p>
				A creative technologist at heart, Rico can be found on Twitter, Github and Codepen straddling the space between design and technology.
			</p>
			<ul>
				<li><a href="https://twitter.com/ricominten">Twitter</a></li>
				<li><a href="https://github.com/ricominten">Github</a></li>
				<li><a href="https://codepen.io/ricominten">Codepen</a></li>
				<li><a href="https://www.instagram.com/ricominten">Instagram</a></li>
			</ul>
		</div>
	)
}

export default Bio