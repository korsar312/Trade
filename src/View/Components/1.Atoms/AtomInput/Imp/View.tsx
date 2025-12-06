import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Text from "../../../0.Cores/Text";
import type { TAtomInputGeneralGroup } from "../index.tsx";
import Image from "../../../0.Cores/Image";

const View: NFC<typeof Model> = (props) => {
	const { textObj, onClick, handleChange, text, name, type, imageLeft, imageRight, disabled, placeObj, isValid, onValid } = props;

	function images(icons?: TAtomInputGeneralGroup) {
		return (
			icons && (
				<div css={[Style.imageWrap, icons.groupStyle]}>
					{icons?.value.map((el, i) => (
						<Image key={i} {...el} />
					))}
				</div>
			)
		);
	}

	return (
		<div css={[Style.wrapper, Style.valid(isValid)]}>
			{images(imageLeft)}

			<div css={Style.inputWrap}>
				<Text extStyle={Style.place()} color={placeObj.color} font={placeObj.font} text={placeObj.text} />

				<input
					type={type}
					name={name}
					defaultValue={String(text)}
					css={[Style.input, Style.inputContent, Style.text(textObj)]}
					onClick={onClick}
					onInput={handleChange}
					disabled={disabled}
					onChange={onValid}
					placeholder={""}
				/>
			</div>

			{images(imageRight)}
		</div>
	);
};

export default View;
