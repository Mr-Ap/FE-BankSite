import React from 'react';

import styles, { layout } from '../style';
import { apple, bill, google } from '../assets';

const Billing = () => (
	<section id='product' className={`${layout.sectionReverse}`}>
		<div className={`${layout.sectionImgReverse}`}>
			<img
				src={bill}
				alt='billing'
				className='w-[100%] h-[100%] relative z-[5]'
			/>

			{/* gradient start */}
			<div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
			<div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient' />
			{/* gradient end */}
		</div>
		<div className={`${layout.sectionInfo} sm:gap-16`}>
			<h2 className={`${styles.heading2}`}>
				Easily control your
				<br /> billing & invoicing.
			</h2>

			<p className={`${styles.paragraph}`}>
				Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
				neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
			</p>

			<div className='flex justify-center items-center gap-4'>
				<img
					src={apple}
					alt='apple store'
					className='w-32 h-10 object-contain'
				/>
				<img
					src={google}
					alt='google store'
					className='w-32 h-10 object-contain'
				/>
			</div>
		</div>
	</section>
);

export default Billing;
