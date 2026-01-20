import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { children, refDialog, extStyle } = props;

	return (
		<dialog ref={refDialog} css={[Style.wrapper, extStyle]}>
			{children}
		</dialog>
	);
};

export default View;
