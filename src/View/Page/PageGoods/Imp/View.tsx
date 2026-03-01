import type { TPresent } from "../";
import TemplateCatalogue from "../../../Components/Templates/Comp/TemplateCatalogue";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";

const View: TPresent = ({ Model, Style }) => {
	const {} = Model;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<TemplateCatalogue />
		</AtomPaper>
	);
};

export default View;
