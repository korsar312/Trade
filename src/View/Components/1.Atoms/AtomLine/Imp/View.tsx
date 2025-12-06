import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { isVert, color } = props;

	return <div css={[Style.wrapper(isVert), Style.color(color)]} />;
};

export default View;
