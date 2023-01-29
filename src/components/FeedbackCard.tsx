import React from 'react';
import { quotes } from '../assets';
import styles from '../style';

const FeedbackCard = ({ feedback }: any) => (
	<div className='flex flex-col py-14 px-10 bg-black-gradient rounded-3xl sm:max-w-sm gap-8 feedback-card'>
		<img src={quotes} alt='feedback qoute' className='w-11 h-7' />
		<p className={`font-poppins text-white text-lg`}>{feedback.content}</p>
		<div className='flex gap-2 items-center'>
			<img src={feedback.img} alt='profile-avatar' className='w-12 h-12' />
			<div className='flex flex-col gap-1'>
				<h5 className={`font-poppins text-white text-xl`}>{feedback.name}</h5>
				<p className={`${styles.paragraph}`}>{feedback.title}</p>
			</div>
		</div>
	</div>
);

export default FeedbackCard;
