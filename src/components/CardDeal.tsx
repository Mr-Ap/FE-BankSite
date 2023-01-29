import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
	<section id='card-Deals' className={`${layout.section}`}>
		<div className={`${layout.sectionInfo} sm:gap-16`}>
			<h2 className={`${styles.heading2}`}>
				Find a better card deal
				<br /> in few easy steps.
			</h2>

			<p className={`${styles.paragraph}`}>
				Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
				aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
			</p>
			<Button />
		</div>
		<div className={`${layout.sectionImg}`}>
			<img
				src={card}
				alt='card-deals'
				className='w-[100%] h-[100%] relative z-[5]'
			/>
		</div>
	</section>
);

export default CardDeal;
