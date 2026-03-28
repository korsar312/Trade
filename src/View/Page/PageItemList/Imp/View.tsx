import type { TPresent } from "../";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";
import AtomWrapper from "../../../Components/1.Atoms/AtomWrapper";
import TemplateItemList from "../../../Components/Templates/Comp/TemplateItemList";
import TemplateCatalogFilter from "../../../Components/Templates/Comp/TemplateCatalogFilter";

const View: TPresent = ({ Model, Style }) => {
	const {} = Model;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<AtomWrapper styleType={"col"}>
				<TemplateCatalogFilter />
				<TemplateItemList type={"item"} />
			</AtomWrapper>
		</AtomPaper>
	);
};

export default View;
