import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { children, color, extStyle, isFull, ...restDiv } = props;

	return (
		<div {...restDiv} css={[Style.wrapper(color), isFull && Style.full, extStyle]}>
			{children}
		</div>
	);
};

export default View;
