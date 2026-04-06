import type { TPresent } from "../";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";
import AtomWrapper from "../../../Components/1.Atoms/AtomWrapper";
import TemplateItemList from "../../../Components/Templates/Comp/TemplateItemList";
import TemplateFilterMyListing from "../../../Components/Templates/Comp/Filter/TemplateFilterMyListing";

const View: TPresent = ({ Model, Style }) => {
	const {} = Model;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<AtomWrapper styleType={"col"}>
				<TemplateFilterMyListing />
				<TemplateItemList type={"listing"} />
			</AtomWrapper>
		</AtomPaper>
	);
};

export default View;
