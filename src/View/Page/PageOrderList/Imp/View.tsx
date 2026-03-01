import type { TPresent } from "../";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";
import TemplateOrderCard from "../../../Components/Templates/Comp/TemplateOrderCard";

const View: TPresent = ({ Model, Style }) => {
	const {} = Model;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<TemplateOrderCard />
		</AtomPaper>
	);
};

export default View;
