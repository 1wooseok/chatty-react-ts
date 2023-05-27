import '../../index.css';

type TProps = {
	color?: string;
};

const Spinner = ({ color = '#fe7c58' }: TProps) => {
	return (
		<div className="flex justify-center items-center">
			<div
				className="spinner"
				style={{ borderLeft: `3px solid ${color}` }}></div>
		</div>
	);
};

export default Spinner;
