import Logo from '~/components/Icon/Logo';
import Icon from '~/components/Icon/Icon';
import phoneLeft from '../../assets/phone-preview-left.png';
import phoneRight from '../../assets/phone-preview-right.png';
import useBool from '~/hooks/useBool';
import { AppStoreDownload } from '../../components/Icon/AppStoreDownload';

const Desktop = () => {
	const [isNavOpen, toggleIsNavOpen] = useBool(false);

	const navItems = [
		{ label: '공지사항', href: '#' },
		{ label: '이용약관', href: '#' },
		{ label: '문의하기', href: '#' },
	];

	const APPSTORE_LINK = '#';

	return (
		<div>
			<div className="bg-natural-200 w-screen">
				{/*Header*/}
				<header className="w-screen sticky z-50 bg-natural-200 top-0 h-60 px-64 under-mobile:px-20 under-mobile:bg-white flex justify-center">
					<div className="h-full w-full flex justify-between items-center max-w-[1920px]">
						<div className="flex items-center under-mobile:gap-4 gap-12">
							<Logo size={32} />
							<span className={'text-28 under-mobile:text-20 text-main-primary font-suit font-black'}>Chatty</span>
						</div>

						<ul className="under-mobile:hidden h-full m-9 flex items-center gap-60 under-mobile:gap-16 text-grey-900 font-semibold">
							{navItems.map(({ label, href }) => (
								<li key={label}>
									<a href={href}>{label}</a>
								</li>
							))}
						</ul>

						<div className="mobile:hidden flex items-center">
							<a
								href={APPSTORE_LINK}
								className="mr-12 inline-flex items-center justify-center w-76 h-30 rounded-2xl text-12 bg-main-primary text-white">
								앱 다운로드
							</a>
							<button onClick={toggleIsNavOpen}>
								<Icon
									size={'28px'}
									icon={isNavOpen ? 'close' : 'hamberger'}
									stroke={1.5}
									strokeColor={'rgb(176, 184, 193)'}
								/>
							</button>
						</div>
					</div>

					{/*List*/}
					{isNavOpen && (
						<div>
							<ul className="absolute flex flex-col w-full bg-white left-0 top-60 z-20 text-grey-900 border-t-1 border-natural-200">
								{navItems.map(({ label, href }) => (
									<li
										key={label}
										className={'w-full'}>
										<a
											href={href}
											className="block py-18 px-20 opacity-80">
											{label}
										</a>
									</li>
								))}
							</ul>
						</div>
					)}
				</header>

				{/* Main */}
				<div className="relative flex items-center under-mobile:flex-col under-mobile:overflow-x-hidden w-[1024px] under-mobile:w-screen my-0 mx-auto h-[calc(100vh-60px)] under-mobile:px-24">
					<div>
						<p className="under-mobile:pt-36 text-pink-dark flex flex-col gap-4 text-64 under-mobile:text-28 font-extrabold">
							<span className="text-main-primary">안녕!</span>
							<span className="text-pink-dark">자유로운 우리를 봐,</span>
							<span>
								<span className="text-main-primary font-suit font-black">Chatty </span>
								<span>예요!</span>
							</span>
						</p>

						<p className="pt-36 pb-12 text-light-primary font-semibold flex flex-col gap-4">
							<span>익명으로 찾는 또다른 나,</span>
							<span>채티에서 함께해요!</span>
						</p>

						<div className={'mt-32'}>
							<a href={APPSTORE_LINK}>
								<AppStoreDownload />
							</a>
						</div>
					</div>

					<div className="relative mobile:w-500 mobile:h-500 under-mobile:w-screen under-mobile:mt-72">
						<img
							src={phoneLeft}
							alt={'preview'}
							className={
								'absolute mobile:top-60 under-mobile:top-50 under-mobile:left-[-70px] under-mobile:max-h-400 max-h-500'
							}
						/>
						<img
							src={phoneRight}
							alt={'preview'}
							className={
								'absolute mobile:right-[-132px] mobile:top-[-100px]  under-mobile:top-[-80px] under-mobile:right-[-30px] under-mobile:max-h-400 max-h-500'
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Desktop;
