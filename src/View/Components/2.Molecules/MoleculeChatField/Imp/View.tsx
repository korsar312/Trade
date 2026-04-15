import type { TPresent } from "../index.tsx";
import AtomWrapper from "../../../1.Atoms/AtomWrapper";
import AtomMessageBubble from "../../../1.Atoms/AtomMessageBubble";

const View: TPresent = ({ Model }) => {
	const {} = Model;

	return (
		<AtomWrapper styleType={"col"}>
			{[1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3].map((el) => (
				<AtomMessageBubble type={el % 2 ? "send" : "receive"} />
			))}
		</AtomWrapper>
	);
};

export default View;
