import React from 'react';
import { clients } from '../constants';

import styles from '../style';

const Clients = () => (
	<div
		className={`${styles.flexCenter} sm:mb-20 mb-6 sm:justify-between flex-wrap w-full`}
	>
		{clients.map((client) => (
			<div key={client.id} className='sm:min-w-48 min-w-[120px]'>
				<img
					src={client.logo}
					alt='logo'
					className={`sm:w-48 w-24 object-contain`}
				/>
			</div>
		))}
	</div>
);

export default Clients;
