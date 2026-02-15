import type { TPresent } from "../";

const View: TPresent = ({ Model, Style }) => {
	const { children } = Model;

	return <div css={Style.wrapper}>{children}</div>;
};

export default View;
