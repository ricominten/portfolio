/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

import {Codepen, Github, LinkedIn, Twitter} from "../Icons";

// import {title, intro, svg} from './Bio.styles';
import * as styles from './Bio.styles';

const Bio = () => {
	return (
		<div>
			<h1>
				<svg css={styles.svg} viewBox="0 0 90.6 71.92">
					<title>Rico</title>
					<path d="M84.36,37.34H52.73c-3.37,0-6.1,2.74-6.1,6.13v22.19c0,3.39,2.73,6.13,6.1,6.13h31.63c3.37,0,6.1-2.74,6.1-6.13
	V43.47C90.47,40.08,87.74,37.34,84.36,37.34z M70.05,59.07c0,0.55-0.67,1-1.5,1s-1.5-0.45-1.5-1v-9c0-0.55,0.67-1,1.5-1
	s1.5,0.45,1.5,1V59.07z"/>
					<path d="M84.36,12.48c3.37,0,6.1-2.74,6.1-6.13s-2.73-6.13-6.1-6.13H52.73c-3.37,0-6.1,2.74-6.1,6.13
	s2.73,6.13,6.1,6.13H84.36z"/>
					<path d="M38.48,54.57c0-3.04,2.45-5.5,5.48-5.5c0,0,0-11.73,0-11.73c0,0-37.73,0-37.73,0c-3.37,0-6.1,2.74-6.1,6.13
	v22.19c0,3.39,2.73,6.13,6.1,6.13c0,0,37.73,0,37.73,0s0-11.72,0-11.72C40.93,60.07,38.48,57.61,38.48,54.57z"/>
					<path d="M27.85,18.91c-0.83,0-1.5-0.45-1.5-1v-9c0-0.55,0.67-1,1.5-1s1.5,0.45,1.5,1v9
	C29.35,18.46,28.68,18.91,27.85,18.91z M43.96,6.25c0-3.39-2.73-6.13-6.1-6.13c0,0-37.73,0-37.73,0s0,34.45,0,34.45h26.23l0-0.05
	v-4.87c0,0,3,4.87,3,4.87l14.61,0.14l-6.1-9.86c3.37,0,6.1-2.74,6.1-6.13C43.96,18.68,43.96,6.25,43.96,6.25z"/>
					<rect x="46.63" y="14.14" width="43.84" height="20.53"/>
				</svg>
			</h1>
			<p css={styles.intro}>
				Rico is a front-end developer in Sydney, currently working on large scale builds for Deloitte Digital clients.
				With a background in industrial design, he tries to create interfaces and front-end systems that work for everyone, and that support accessibility needs.
			</p>
			<p css={styles.intro}s>
				A creative technologist at heart, Rico can be found on Twitter, Github and Codepen straddling the space between design and technology.
			</p>
			<ul css={styles.list}>
				<li>
					<a css={styles.link} href="https://github.com/ricominten">
						<Github/>
						Github
					</a>
				</li>
				<li>
					<a css={styles.link} href="https://codepen.io/ricominten">
						<Codepen/>
						Codepen
					</a>
				</li>
				<li>
					<a css={styles.link} href="https://twitter.com/ricominten">
						<Twitter/>
						Twitter
					</a>
				</li>
				<li>
					<a css={styles.link} href="https://www.linkedin.com/in/rico-minten/">
						<LinkedIn/>
						LinkedIn
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Bio