import type { TPresent } from "../";
import TemplateProfile from "../../../Components/Templates/Comp/TemplateProfile";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";
import TemplateBalance from "../../../Components/Templates/Comp/TemplateBalance";

const View: TPresent = ({ Model, Style }) => {
	const {} = Model;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<TemplateProfile />
			<TemplateBalance />
		</AtomPaper>
	);
};

export default View;
