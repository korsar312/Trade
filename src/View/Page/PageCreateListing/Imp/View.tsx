import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";
import MoleculeFormSchemaTextPair from "../../../Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextPair";
import MoleculeGroupBtn from "../../../Components/2.Molecules/MoleculeGroupBtn";
import { type CatalogueInterface, CatalogueTypeItem } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { Act } from "../../../../Logic/Core";

const typeItemArr = Object.keys(CatalogueTypeItem) as CatalogueInterface.ETypeItem[];

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	const param = useParamPage("CREATE_LISTING");
	const typeParam = param.type as CatalogueInterface.ETypeItem;
	const typeFormat: CatalogueInterface.ETypeItem = typeItemArr.includes(typeParam) ? typeParam : "CARD";

	function isChoiceTab(type: CatalogueInterface.ETypeItem) {
		return typeFormat === type;
	}

	function changeTab(type: CatalogueInterface.ETypeItem) {
		return Act.Router.goTo("CREATE_LISTING", { type }, { noHistory: true });
	}

	return (
		<div css={Style.wrapper}>
			<div css={Style.content}>
				<AtomPaper color={"MAIN_2"}>
					<MoleculeFormSchemaTextPair title={"ENTER"} labelDesc={"ENTER"} labelTitle={"ENTER"} submit={() => ""} />
				</AtomPaper>

				<AtomPaper color={"MAIN_2"}>
					<MoleculeGroupBtn
						btnRow={typeItemArr.map((el) => ({
							id: el,
							options: { click: () => changeTab(el), text: el },
							isActive: isChoiceTab(el),
						}))}
					/>
				</AtomPaper>

				<AtomPaper color={"MAIN_2"}>
					<MoleculeFormSchemaTextPair title={"ENTER"} labelDesc={"ENTER"} labelTitle={"ENTER"} submit={() => ""} />
				</AtomPaper>
			</div>
		</div>
	);
};

export default View;
