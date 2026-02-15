import type { TPresent } from "../";

const View: TPresent = ({ Model, Style }) => {
	const { children, color, extStyle, isFull, ...restDiv } = Model;

	return (
		<div {...restDiv} css={[Style.wrapper(color), isFull && Style.full, extStyle]}>
			{children}
		</div>
	);
};

export default View;
