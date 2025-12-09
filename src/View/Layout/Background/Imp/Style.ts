import Styles from "../../../../Styles/Styles.ts";

class Style extends Styles {
	public wrapper = `
		background: ${this.getColor("MAIN_1")};
	`;
}

export default new Style();
