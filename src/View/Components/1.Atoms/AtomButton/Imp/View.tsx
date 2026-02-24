import type { TAtomButtonIcon, TPresent } from "../index.tsx";
import Text from "../../../0.Cores/Text";
import Ripple from "../../../0.Cores/Ripple";
import Image from "../../../0.Cores/Image/";

const View: TPresent = ({ Model, Style }) => {
	const {
		textChanged,
		color,
		extStyles,
		rightIcon,
		leftIcon,
		isFullWidth,
		isFullHeight,
		handleClick,
		type,
		isDisable,
		round,
		isLoading,
	} = Model;

	function iconRender(icon: TAtomButtonIcon) {
		return (
			<div css={[icon.groupStyle, Style.icon]}>
				{icon.value.map((el, i) => (
					<Image key={i} {...el} />
				))}
			</div>
		);
	}

	return (
		<button
			disabled={Boolean(isDisable || isLoading)}
			type={type || "button"}
			onClick={handleClick}
			css={[Style.wrapper(isFullWidth, isFullHeight, round), Style.color(color), extStyles]}>
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
