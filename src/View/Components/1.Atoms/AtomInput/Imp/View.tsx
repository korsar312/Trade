import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Text from "../../../0.Cores/Text";
import type { TAtomInputGeneralGroup } from "../index.tsx";
import Image from "../../../0.Cores/Image";

const View: NFC<typeof Model> = (props) => {
	const { color, textObj, onClick, text, imageLeft, imageRight, placeObj, isValid, onValid, rest } = props;

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
		<div css={[Style.wrapper(textObj.font, color), Style.valid(isValid)]}>
			{images(imageLeft)}

			<div css={Style.inputWrap}>
				<Text extStyle={Style.place()} color={placeObj.color} font={placeObj.font} text={placeObj.text} />

				<input
					css={[Style.input, Style.text(textObj)]}
					onChange={onValid}
					placeholder={""}
					defaultValue={rest.value === undefined ? String(text) : undefined}
					onClick={onClick}
					{...rest}
				/>
			</div>

			{images(imageRight)}
		</div>
	);
};

export default View;
