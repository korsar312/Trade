import { useState } from "react";

/**
 * Хук загрузки *
 */
export const useUpdate = (initVal?: boolean): [boolean, () => void, () => void] => {
	const [isUpdate, setIsUpdate] = useState(initVal ?? false);

	function enabledUpdating() {
		setIsUpdate(true);
	}

	function disabledUpdating() {
		setIsUpdate(false);
	}

	return [isUpdate, enabledUpdating, disabledUpdating];
};
