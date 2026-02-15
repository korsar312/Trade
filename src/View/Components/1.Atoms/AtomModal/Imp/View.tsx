import type { TPresent } from "../";
import type { MouseEvent } from "react";

const View: TPresent = ({ Model, Style }) => {
	const { children, extStyle, bgClick } = Model;

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
