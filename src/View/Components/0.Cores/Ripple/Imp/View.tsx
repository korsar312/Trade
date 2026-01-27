import type Model from "./Model.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Style from "./Style.ts";

const View: NFC<typeof Model> = (props) => {
	const { rippleContainer, ripples, setRipples } = props;

	return (
		<div ref={rippleContainer} css={Style.wrapper}>
			{ripples.map((r) => (
				<span
					key={r.id}
					css={Style.rippleStyle}
					style={Style.rippleParam(r.x, r.y, r.size, r.size)}
					onAnimationEnd={() => setRipples((p) => p.filter((i) => i.id !== r.id))}
				/>
			))}
		</div>
	);
};

export default View;
