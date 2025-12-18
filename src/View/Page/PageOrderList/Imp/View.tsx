import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";
import TemplateOrderCard from "../../../Components/Templates/TemplateOrderCard";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<TemplateOrderCard />
		</AtomPaper>
	);
};

export default View;
