import React from 'react';
import styles from '../style';

const Button = ({ style }: any) => (
	<button
		type='button'
		className={`font-poppins text-primary font-medium bg-blue-gradient rounded-xl py-4 px-6 ${style}`}
	>
		Get Started
	</button>
);

export default Button;
