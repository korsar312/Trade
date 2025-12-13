import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import TemplateCatalogue from "../../../Components/Templates/TemplateCatalogue";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<TemplateCatalogue />
		</AtomPaper>
	);
};

export default View;
