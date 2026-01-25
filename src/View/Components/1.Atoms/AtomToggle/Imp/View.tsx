import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { extStyles, ...rest } = props;

	return <input readOnly {...rest} css={[Style.wrapper, extStyles]} />;
};

export default View;
