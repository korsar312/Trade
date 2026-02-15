import type { TPresent } from "../";
import Style from "./Style.ts";

const View: TPresent = ({ Model }) => {
	const {} = Model;

	document.body.setAttribute("style", Style.wrapper);

	return null;
};

export default View;
