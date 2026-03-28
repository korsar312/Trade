import type { TPresent } from "../";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";

const View: TPresent = ({ Model, Style }) => {
	const {} = Model;

	return <AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}></AtomPaper>;
};

export default View;
