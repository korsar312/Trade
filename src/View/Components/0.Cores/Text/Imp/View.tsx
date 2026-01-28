import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Util from "../../../../../Logic/Libs/Util/index.ts";

const View: NFC<typeof Model> = (props) => {
	const { textFind, color, extStyle, font, opacity, pos } = props;

	function text() {
		if (Array.isArray(textFind)) {
			return textFind.map((el, i) => (
				<span key={i} css={el.style}>
					{el.text}
				</span>
			));
		}

		return textFind;
	}

	return <span css={[Style.wrapper, Style.param(pos, font, color, opacity), ...Util.getArray(extStyle)]}>{text()}</span>;
};

export default View;
