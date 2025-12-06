import { css, type CSSObject } from "@emotion/react";
import { Act } from "../../Logic/Core";

class MixinsVars {
	public flexCenter: CSSObject = css`
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	public flexGorCenter: CSSObject = css`
		display: flex;
		justify-content: center;
	`;

	public flexVerCenter: CSSObject = css`
		display: flex;
		align-items: center;
	`;

	public flexCol: CSSObject = css`
		display: flex;
		flex-direction: column;
	`;

	public flexCenterCol: CSSObject = css`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	`;

	public absolute: CSSObject = css`
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	`;

	public fixed: CSSObject = css`
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	`;

	public noScrollBar: CSSObject = css`
		&::-webkit-scrollbar {
			display: none;
		}
	`;

	public lineBreak(line: number): CSSObject {
		return css`
			display: -webkit-box;
			webkit-line-clamp: ${line};
			webkit-box-orient: "vertical";
			overflow: hidden;
		`;
	}

	public marPadVert(num: number): CSSObject {
		const size = Act.Style.getSize(num);

		return css`
			margin-top: -${size};
			margin-bottom: -${size};
			padding-top: ${size};
			padding-bottom: ${size};
		`;
	}

	public marPadGor(num: number): CSSObject {
		const size = Act.Style.getSize(num);

		return css`
			margin-left: -${size};
			margin-right: -${size};
			padding-left: ${size};
			padding-right: ${size};
		`;
	}
}

const Mixins = new MixinsVars();
export default Mixins;
