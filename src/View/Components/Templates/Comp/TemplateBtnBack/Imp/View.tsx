import type { TPresent } from "../index.tsx";
import AtomButtonMain from "../../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

const View: TPresent = ({ Model }) => {
	const { params } = Model;

	return <AtomButtonMain {...params} />;
};

export default View;
