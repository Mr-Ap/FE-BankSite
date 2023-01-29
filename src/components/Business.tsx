import React from 'react';

import Button from './Button';
import { features } from '../constants';
import styles, { layout } from '../style';

const FeatureCard = ({ feature }: any) => (
	<div className={`flex items-center py-3 px-5 feature-card rounded-3xl gap-5`}>
		<div className='flex justify-center items-center w-16 h-16 rounded-full hover:bg-dimBlue'>
			<img src={feature.icon} alt={feature.title} className='w-8 h-8' />
		</div>
		<div className='flex flex-col flex-1 gap-2'>
			<h6 className='font-poppins text-white text-lg'>{feature.title}</h6>
			<p className='font-poppins text-dimWhite text-base'>{feature.content}</p>
		</div>
	</div>
);

const Business = () => (
	<section id='product' className={`${layout.section}`}>
		<div className={`${layout.sectionInfo}`}>
			<h2 className={`${styles.heading2}`}>
				You do the business,
				<br /> we’ll handle the money.
			</h2>

			<p className={`${styles.paragraph}`}>
				With the right credit card, you can improve your financial life by
				building credit, earning rewards and saving money. But with hundreds of
				credit cards on the market.
			</p>

			<Button />
		</div>
		<div className={`${layout.sectionInfo}`}>
			{features.map((feature) => (
				<FeatureCard key={feature.id} feature={feature} />
			))}
		</div>
	</section>
);

export default Business;
