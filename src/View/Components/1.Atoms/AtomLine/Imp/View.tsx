import type { TPresent } from "../";

const View: TPresent = ({ Model, Style }) => {
	const { isVert, color } = Model;

	return <div css={[Style.wrapper(isVert), Style.color(color)]} />;
};

export default View;
