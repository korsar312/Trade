import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Text from "../../../0.Cores/Text";

const View: NFC<typeof Model> = (props) => {
	const { color, textObj, text, placeObj, isValid, onValid, value, rest } = props;

	return (
		<div css={[Style.wrapper(color), Style.valid(isValid)]}>
			<Text extStyle={Style.place()} color={placeObj.color} font={placeObj.font} text={placeObj.text} />

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
