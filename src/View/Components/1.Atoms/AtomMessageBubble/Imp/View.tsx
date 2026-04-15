import type { TPresent } from "../index.tsx";
import Text from "../../../0.Cores/Text";

const View: TPresent = ({ Model, Style }) => {
	const { type, color } = Model;

	return (
		<div css={Style.wrapper(type, color)}>
			<Text text={"Здравствуйте, получил данные."} />
		</div>
	);
};

export default View;
