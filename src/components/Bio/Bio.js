/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

import {title, svg} from './Bio.styles';

const Bio = () => {
	return (
		<div>
			<h1>
				<svg css={svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.25 78.7">
					<title>Rico</title>
					<desc>Image logo</desc>
					<rect className="cls-1" x="50.03" y="28.25" width="40.09" height="12.3"/>
					<path className="cls-1" d="M53.72,19.25h32.7a3.73,3.73,0,0,1,0,7.45H53.72a3.73,3.73,0,0,1,0-7.45Z"/>
					<path className="cls-1" d="M40.2,44.13v6.92a3.73,3.73,0,0,0,0,7.45v6.92H5.6a5.49,5.49,0,0,1-5.48-5.5V49.63a5.48,5.48,0,0,1,5.48-5.5Z"/>
					<path className="cls-1" d="M40.27,30.63c3.35,0,6.07-3.17,6.07-7.09V7.21c0-3.91-2.72-7.09-6.07-7.09H8.64v40.4h20.1V35.69l3,4.83H46.23L40.1,30.63Zm-8.54-4.57c0,.55-.67,1-1.5,1s-1.5-.45-1.5-1V11c0-.55.67-1,1.5-1s1.5.45,1.5,1Z"/>
					<path className="cls-1" d="M81.51,44.12H49.88a6.12,6.12,0,0,0-6.1,6.13v22.2a6.11,6.11,0,0,0,6.1,6.12H81.51a6.11,6.11,0,0,0,6.1-6.12V50.25A6.12,6.12,0,0,0,81.51,44.12ZM67.2,65.85c0,.55-.67,1-1.5,1s-1.5-.45-1.5-1v-9c0-.55.67-1,1.5-1s1.5.45,1.5,1Z"/>
				</svg>
			</h1>
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