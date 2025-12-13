import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	private pad = 12;
	private border = `1px solid ${this.getColor("SECOND_2", 0.3)}`;

	public wrapper: CSSObject = css`
		${this.mixins.noScrollBar};
		border-radius: ${this.variables.radiusStandard}px;
		border-collapse: collapse;
		overflow: auto;
		max-height: 100%;
	`;

	public table: CSSObject = css`
		border-collapse: collapse;

		& tr:last-child td {
			border-bottom: none;
		}
	`;

	public key: CSSObject = css`
		background: ${this.getColor("MAIN_4", 0.5)};
		border-right: ${this.border};
		border-bottom: ${this.border};
		padding: ${this.pad}px;
	`;

	public value: CSSObject = css`
		background: ${this.getColor("MAIN_2", 0.5)};
		border-bottom: ${this.border};
		padding: 0 ${this.pad}px;
		width: 100%;
	`;
}

export default new Style();
