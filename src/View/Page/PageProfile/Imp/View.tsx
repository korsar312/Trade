import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import TemplateProfile from "../../../Components/Templates/TemplateProfile";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<TemplateProfile />
		</AtomPaper>
	);
};

export default View;
