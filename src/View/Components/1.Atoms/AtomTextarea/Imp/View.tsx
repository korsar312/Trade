import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Text from "../../../0.Cores/Text";

const View: NFC<typeof Model> = (props) => {
	const { color, textObj, onClick, handleChange, text, name, disabled, placeObj, isValid, onValid, value } = props;

	return (
		<div css={[Style.wrapper(color), Style.valid(isValid)]}>
			<div css={Style.inputWrap}>
				<Text extStyle={Style.place()} color={placeObj.color} font={placeObj.font} text={placeObj.text} />

				<textarea
					autoCorrect={"on"}
					name={name}
					css={[Style.input, Style.text(textObj)]}
					onClick={onClick}
					onInput={handleChange}
					disabled={disabled}
					onChange={onValid}
					placeholder={""}
					defaultValue={value === undefined ? String(text) : undefined}
				/>
			</div>
		</div>
	);
};

export default View;
