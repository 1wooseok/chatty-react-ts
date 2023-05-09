import { useCallback, useState } from 'react';

const useBool = (initialState = false) => {
	const [bool, setBool] = useState(initialState);

	const toggleBool = useCallback(() => {
		setBool(prev => !prev);
	}, []);

	return [bool, toggleBool] as [bool: boolean, toggleBool: () => void];
};

export default useBool;
