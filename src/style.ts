const styles = {
	boxWidth: 'xl:max-w-[1280px] w-full',

	heading2:
		'font-poppins font-semibold text-white text-[3rem] leading-[4.5rem] w-full',
	paragraph: 'font-poppins font-normal text-dimWhite text-lg',

	flexCenter: 'flex justify-center items-center',
	flexStart: 'flex justify-center items-start',

	paddingX: 'sm:px-16 px-6',
	paddingY: 'sm:py-16 py-6',
	padding: 'sm:px-16 px-6 sm:py-12 py-4',

	marginX: 'sm:mx-16 mx-6',
	marginY: 'sm:my-16 my-6',
};

export const layout = {
	section: `flex sm:flex-row flex-col sm:gap-0 gap-5 sm:mb-20 mb-6`,
	sectionReverse: `flex sm:flex-row flex-col-reverse sm:gap-0 gap-5 sm:mb-20 mb-6`,

	sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
	sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

	sectionInfo: `flex flex-1 flex-col gap-6 sm:items-start items-center`,
};

export default styles;
