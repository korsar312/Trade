import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import type { MouseEvent } from "react";

const View: NFC<typeof Model> = (props) => {
	const { children, extStyle, bgClick } = props;

	function onClick(e: MouseEvent<HTMLDivElement>) {
		if (e.target !== e.currentTarget) return;
		bgClick?.();
	}

	return (
		<div css={Style.wrapper} onClick={onClick}>
			<div css={[Style.content, extStyle]} onClick={onClick}>
				{children}
			</div>
		</div>
	);
};

export default View;
