import type { TPresent } from "../index.tsx";
import Text from "../../../0.Cores/Text";

const View: TPresent = ({ Model, Style }) => {
	const { type, color, text, dateString } = Model;

	return (
		<div css={Style.wrapper(type, color)}>
			<div>
				<Text text={text} />
			</div>

			<div css={Style.time}>
				<Text color={"SECOND_2"} font={"BodySub"} text={dateString} />
			</div>
		</div>
	);
};

export default View;
