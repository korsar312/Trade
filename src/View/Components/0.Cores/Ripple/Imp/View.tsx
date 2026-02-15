import type { TPresent } from "../";

const View: TPresent = ({ Model, Style }) => {
	const { rippleContainer, ripples, setRipples } = Model;

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
