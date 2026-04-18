import type { TPresent } from "../index.tsx";
import AtomWrapper from "../../../1.Atoms/AtomWrapper";
import AtomMessageBubble from "../../../1.Atoms/AtomMessageBubble";

const View: TPresent = ({ Model, Style }) => {
	const { textRow } = Model;

	return (
		<AtomWrapper extStyle={Style.wrapper} styleType={"col"}>
			{textRow.map((el) => {
				const isRight = el.type === "receive";

				return (
					<div css={Style.chatEl(isRight ? "right" : "left")}>
						<div css={Style.text}>
							<AtomMessageBubble color={isRight ? "SECOND_3" : "MAIN_3"} {...el} />
						</div>
					</div>
				);
			})}
		</AtomWrapper>
	);
};

export default View;
