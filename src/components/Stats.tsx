import React from 'react';

import { stats } from '../constants';
import styles from '../style';

const Stats = () => (
	<div className={`flex flex-row flex-wrap sm:mb-20 mb-6`}>
		{stats.map((stat) => (
			<p
				key={stat.id}
				className={`flex flex-1 items-center font-poppins text-white`}
			>
				<span
					className={`md:text-[2.5rem] text-[1.8rem] md:leading-[3.25rem] leading-8 font-semibold`}
				>
					{stat.value}
				</span>{' '}
				<span
					className={`md:text-xl text-base text-gradient sm:px-4 px-6 uppercase`}
				>
					{stat.title}
				</span>
			</p>
		))}
	</div>
);

export default Stats;
