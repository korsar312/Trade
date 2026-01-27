import Styles from "../../../../../../Styles/Styles.ts";
import { css } from "@emotion/react";

class Style extends Styles {
	public wrapper = css`
		display: flex;
		flex-direction: column;
		gap: ${this.size(3)};
	`;

	public content = css`
		display: flex;
		flex-direction: column;
	`;
}

export default new Style();
