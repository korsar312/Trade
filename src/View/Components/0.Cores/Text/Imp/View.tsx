import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Util from "../../../../../Logic/Libs/Util/index.ts";

const View: NFC<typeof Model> = (props) => {
	const { textFind, color, extStyle, font, opacity, pos } = props;

	return <span css={[Style.wrapper, Style.param(pos, font, color, opacity), ...Util.getArray(extStyle)]}>{textFind}</span>;
};

export default View;
