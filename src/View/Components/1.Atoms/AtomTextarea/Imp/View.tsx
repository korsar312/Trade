import type { TPresent } from "../";
import Text from "../../../0.Cores/Text";

const View: TPresent = ({ Model, Style }) => {
	const { color, textObj, text, placeObj, isValid, onValid, value, rest } = Model;

	return (
		<div css={[Style.wrapper(color), Style.valid(isValid)]}>
			{placeObj && <Text extStyle={Style.place} color={placeObj.color} font={placeObj.font} text={placeObj.text} />}

			<textarea
				css={[Style.input, Style.text(textObj)]}
				onChange={onValid}
				placeholder={""}
				defaultValue={value === undefined ? String(text) : undefined}
				{...rest}
			/>
		</div>
	);
};

export default View;
