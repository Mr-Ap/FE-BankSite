import { ReactElement } from 'react';

import {
	Billing,
	Business,
	CardDeal,
	Clients,
	CTA,
	Footer,
	Hero,
	NavBar,
	Stats,
	Testimonials,
} from './components';
import styles from './style';

const App = (): ReactElement => {
	return (
		/* Navbar */
		<div className='bg-primary w-full overflow-hidden'>
			<div className={`${styles.flexCenter} ${styles.paddingX}`}>
				<div className={`${styles.boxWidth}`}>
					<NavBar />
				</div>
			</div>

			{/* Hero */}
			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Stats />
					<Business />
					<Billing />
					<CardDeal />
					<Testimonials />
					<Clients />
					<CTA />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
