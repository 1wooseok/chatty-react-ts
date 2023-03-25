type Props = {
	// ref: ReactNode;
	tabs: any[];
	activeTabIndex: number;
};

// 요구사항
// 1. props로 탭 목록만 넘겨주면 알아서 state도 바꿔주고 ui도 바꿔주는 훅을 원함
// 2. 근데 상위에서 state를 관리해야하는 상황이 있기때문에 hook내부에서 state는 관리 할 수 없음.

const UseSlide = ({ tabs, activeTabIndex }: Props) => {};

export default UseSlide;
