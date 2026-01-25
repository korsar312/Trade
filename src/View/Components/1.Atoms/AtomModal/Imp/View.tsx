import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { children, extStyle, bgClick } = props;

	return (
		<div css={[Style.wrapper, extStyle]}>
			<div css={Style.backdrop} onClick={bgClick} />
			{children}
		</div>
	);
};

export default View;
