import type { TPresent } from "../";

const View: TPresent = ({ Model, Style }) => {
	const {} = Model;

	return <div css={Style.wrapper} />;
};

export default View;
