import { Link } from 'react-router-dom';
import Icon from '~/components/Icon/Icon';
import LogoWithText from '~/components/Icon/LogoWithText';

const Landing = () => {
	return (
		<div className="relative w-screen h-screen bg-natural-200 flex flex-col justify-center items-center">
			<div></div>
			<LogoWithText />
			<Link
				to={'/chatty'}
				className="absolute bottom-[40px] flex items-center gap-[4px] text-l text-[#FE7C58] font-semibold">
				<span>채티 둘러보기</span>
				<Icon
					size={'20px'}
					stroke={2.5}
					fillColor={'#F0E7DF'}
					strokeColor={'#FE7C58'}
					icon={'arrowRightPlane'}
				/>
			</Link>
		</div>
	);
};

export default Landing;
