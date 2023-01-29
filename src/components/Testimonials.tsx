import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
	return (
		<section
			id='testimonials'
			className={`sm:mb-20 mb-6 flex flex-col gap-20 relative`}
		>
			{/* gradient start */}
			<div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />
			{/* gradient end */}
			<div className={`${styles.flexCenter} sm:flex-row flex-col`}>
				<h2 className={`${styles.heading2}`}>
					What people are <br />
					saying about us
				</h2>
				<p className={`${styles.paragraph}`}>
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>
			<div className={`${styles.flexStart} sm:flex-row flex-wrap flex-col`}>
				{feedback.map((fb) => (
					<FeedbackCard key={fb.id} feedback={fb} />
				))}
			</div>
		</section>
	);
};

export default Testimonials;
