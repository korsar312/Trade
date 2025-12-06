import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { children, xs, sm, md, xl, lg, item, space, extStyle } = props;

	const css = item ? Style.itemGrid({ xs, sm, md, xl, lg }) : Style.containerGrid;

	return <div css={[css, Style.wrapper(space), extStyle]}>{children}</div>;
};

export default View;
