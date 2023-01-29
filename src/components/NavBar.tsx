import React, { useState } from 'react';

import { close, logo, menu } from '../assets';
import styles from '../style';
import { navLinks } from '../constants';

const NavBar = () => {
	const [toggle, setToggle] = useState<boolean>(false);

	return (
		<nav className={`flex w-full py-6 justify-between items-center navbar`}>
			<img src={logo} alt='logo' className='w-[124px] h-[32px]' />
			<ul
				className={`list-none sm:flex hidden justify-end items-center flex-1 gap-4`}
			>
				{navLinks.map((navLink) => (
					<li
						key={navLink.id}
						className={`text-white font-poppins font-normal cursor-pointer`}
					>
						<a href={navLink.id}>{navLink.title}</a>
					</li>
				))}
			</ul>

			{/* mobile view */}
			<div className={`sm:hidden items-center justify-end flex flex-1`}>
				<img
					src={toggle ? close : menu}
					alt='NavbarMenu'
					className={`w-7 h-7 cursor-pointer`}
					onClick={() => setToggle((prevToggle) => !prevToggle)}
				/>
				{toggle && (
					<div
						className={`flex bg-black-gradient absolute top-20 right-0 p-6 mx-4 my-2 min-w-[9rem] rounded-xl sidebar`}
					>
						<ul
							className={`list-none flex flex-col justify-end items-center flex-1 gap-4`}
						>
							{navLinks.map((navLink) => (
								<li
									key={navLink.id}
									className={`text-white font-poppins font-normal cursor-pointer`}
								>
									<a href={navLink.id}>{navLink.title}</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
