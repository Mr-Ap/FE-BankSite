import React from 'react';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import styles from '../style';

const Footer = () => (
	<section id='footer' className='w-full flex flex-col'>
		<div
			className={`flex md:flex-row flex-col flex-wrap items-start md:gap-0 gap-8`}
		>
			<div className={`${styles.flexCenter} items-start flex-col gap-6`}>
				<img src={logo} alt='logo' className='w-[16rem] h-[4.5rem]' />
				<p className={`${styles.paragraph} `}>
					A new way to make the payments easy, reliable and secure.
				</p>
			</div>
			<div className='flex flex-1 w-full flex-row flex-wrap justify-evenly items-start ss:gap-0 gap-5'>
				{footerLinks.map((link) => (
					<div
						key={link.title}
						className={`flex flex-col font-poppins text-white gap-5`}
					>
						<span>{link.title}</span>
						<ul className='flex flex-col decoration-none text-dimWhite gap-2'>
							{link.links.map((l) => (
								<li key={l.name}>
									<a href={l.link} className='hover:text-secondary'>
										{l.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
		<div className='w-full my-6 h-1 bg-[#3F3E45]'></div>
		<div
			className={`flex sm:flex-row sm:gap-0 gap-5 flex-col justify-between items-center`}
		>
			<div className={`flex text-base font-poppins text-dimWhite`}>
				<span>Copyright</span> {'  '}
				<span>2021 HooBank. All Rights Reserved.</span>
			</div>
			<div className='flex justify-between sm:w-[20%] md:w-[10%] sm:gap-0 gap-5'>
				{socialMedia.map((sm) => (
					<a key={sm.id} href={sm.link}>
						<img src={sm.icon} className='object-contain' />
					</a>
				))}
			</div>
		</div>
	</section>
);

export default Footer;
