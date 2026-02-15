import type { TPresent } from "../";

const View: TPresent = ({ Model, Style }) => {
	const {} = Model;

	return <div css={Style.wrapper}></div>;
};

export default View;
