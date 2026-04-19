import type { TPresent } from "../index.tsx";
import AtomWrapper from "../../../1.Atoms/AtomWrapper";
import AtomMessageBubble from "../../../1.Atoms/AtomMessageBubble";

const View: TPresent = ({ Model, Style }) => {
	const { textRow } = Model;

	return (
		<AtomWrapper extStyle={Style.wrapper} styleType={"col"}>
			{textRow.map(({ id, ...el }) => {
				const isSend = el.type === "send";

				return (
					<div key={id} css={Style.chatEl(isSend ? "right" : "left")}>
						<div css={Style.text}>
							<AtomMessageBubble color={isSend ? "SECOND_3" : "MAIN_3"} {...el} />
						</div>
					</div>
				);
			})}
		</AtomWrapper>
	);
};

export default View;
