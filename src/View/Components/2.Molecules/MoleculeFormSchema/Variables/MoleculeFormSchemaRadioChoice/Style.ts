import Styles from "../../../../../../Styles/Styles.ts";
import { css } from "@emotion/react";

class Style extends Styles {
	public wrapper = css`
		display: flex;
		flex-direction: column;
		padding: ${this.size(4)};
		gap: ${this.size(3)};
	`;

	public content = css`
		display: flex;
		flex-direction: column;
	`;

	public switch = css`
		${this.mixins.flexVerCenter};
		gap: 12px;
	`;
}

export default new Style();
