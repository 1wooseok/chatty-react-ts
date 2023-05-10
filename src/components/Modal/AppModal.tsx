import Logo from '../Icon/Logo';
import Dimmer from './Dimmer';

type Props = {
	toggleAppOpen: () => void;
};

const AppModal = ({ toggleAppOpen }: Props) => {
	return (
		<Dimmer onClick={toggleAppOpen}>
			<div className={'absolute bottom-0 w-full h-300 bg-white rounded-t-2xl z-50 p-20 max-w-lg'}>
				<div className="flex flex-col items-center justify-center">
					<Logo size={45} />
					<h3 className="text-20 font-medium mt-12">지금 바로 채티와 함께 해요!</h3>
					<p className={'text-grey-600 font-normal mt-4 mb-16'}>앱에서 더 많은 기능을 사용해 보세요</p>
					<button
						onClick={() => null}
						className="w-full h-50 bg-main-primary rounded-2xl text-center">
						<span className={'text-dark-primary text-16 font-medium'}>chatty 열기</span>
					</button>
					<button
						onClick={toggleAppOpen}
						className="text-[#FE7C58] mt-16">
						다음에
					</button>
				</div>
			</div>
		</Dimmer>
	);
};

export default AppModal;
