import type { IComponent } from "../index";
import { useState } from "react";

function Model(props: IComponent) {
	const {} = props;

	const [isShowDebug, setIsShowDebug] = useState(false);

	function toggleDebug() {
		setIsShowDebug((old) => !old);
	}

	return { isShowDebug, toggleDebug };
}

export default Model;
