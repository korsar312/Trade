import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import type { TAtomButtonIcon } from "../index.tsx";
import Images from "../../../0.Cores/Image/";
import Text from "../../../0.Cores/Text";
import Ripple from "../../../0.Cores/Ripple";

const View: NFC<typeof Model> = (props) => {
	const { textChanged, color, extStyles, rightIcon, leftIcon, isFullWidth, isFullHeight, handleClick, type, isDisable } = props;

	function iconRender(icon: TAtomButtonIcon) {
		return (
			<div css={[icon.groupStyle, Style.icon]}>
				{icon.value.map((el, i) => (
					<Images key={i} {...el} />
				))}
			</div>
		);
	}

	return (
		<button
			disabled={isDisable}
			type={type}
			onClick={handleClick}
			css={[Style.wrapper(isFullWidth, isFullHeight), Style.color(color), extStyles]}>
			{leftIcon && iconRender(leftIcon)}

			{textChanged && (
				<div css={[Style.textCont, textChanged.groupStyle]}>
					{textChanged.value.map((el) => (
						<Text key={el.text} {...el} />
					))}
				</div>
			)}

			{rightIcon && iconRender(rightIcon)}

			<Ripple />
		</button>
	);
};

export default View;
