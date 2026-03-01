import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	private pad = 12;
	private border = `1px solid ${this.getColor("SECOND_2", 0.3)}`;

	private key: CSSObject = css`
		border-bottom: ${this.border};
		padding: ${this.pad}px;
	`;

	private value: CSSObject = css`
		border-bottom: ${this.border};
		width: 100%;
	`;

	public wrapper(noCompact?: boolean): CSSObject {
		return css`
			${noCompact ? "overflow: clip" : this.mixins.noScrollBar};

			border-radius: ${this.variables.radiusStandard}px;
			border-collapse: collapse;
			max-height: 100%;
		`;
	}

	public table: CSSObject = css`
		border-collapse: collapse;

		& tr:last-child td {
			border-bottom: none;
		}
	`;

	public keyG: CSSObject = css`
		${this.key};
		background: ${this.getColor("MAIN_4")};
		border-right: ${this.border};

		&:not(:has(+ td)) {
			text-align: center;
			border-right: none;
		}
	`;

	public keyV: CSSObject = css`
		${this.key};
		text-align: center;
		background: ${this.getColor("MAIN_3")};
	`;

	public valueG: CSSObject = css`
		${this.value};
		background: ${this.getColor("MAIN_3")};
		padding: 0 ${this.pad}px;
	`;

	public valueV: CSSObject = css`
		${this.value};
		background: ${this.getColor("MAIN_4")};
		padding: ${this.pad}px;
	`;
}

export default new Style();
