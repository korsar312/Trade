import type { TPresent } from "../";

const View: TPresent = ({ Model, Style }) => {
	const { extStyles, ...rest } = Model;

	return <input readOnly {...rest} css={[Style.wrapper, extStyles]} />;
};

export default View;
