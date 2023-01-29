import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => (
	<section
		className={`${styles.flexCenter} sm:gap-0 gap-8 sm:flex-row flex-col bg-black-gradient-2 ${styles.marginY} ${styles.padding} rounded-3xl box-shadow`}
	>
		<div className={`${styles.flexCenter} flex-col flex-2`}>
			<h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
			<p className={`${styles.paragraph}`}>
				Everything you need to accept card payments and grow your business
				anywhere on the planet.
			</p>
		</div>
		<div className={`${styles.flexCenter} flex-1 basis-[15%]`}>
			<Button />
		</div>
	</section>
);

export default CTA;
