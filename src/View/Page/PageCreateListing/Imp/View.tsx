import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";
import MoleculeFormSchemaTextPair from "../../../Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextPair";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<div css={Style.wrapper}>
			<AtomPaper color={"MAIN_2"}>
				<MoleculeFormSchemaTextPair title={"ENTER"} labelDesc={"ENTER"} labelTitle={"ENTER"} submit={() => ""} />
			</AtomPaper>

			<AtomPaper color={"MAIN_2"}>
				<MoleculeFormSchemaTextPair title={"ENTER"} labelDesc={"ENTER"} labelTitle={"ENTER"} submit={() => ""} />
			</AtomPaper>

			<AtomPaper css={Style.mainForm} color={"MAIN_2"}>
				<MoleculeFormSchemaTextPair title={"ENTER"} labelDesc={"ENTER"} labelTitle={"ENTER"} submit={() => ""} />
			</AtomPaper>
		</div>
	);
};

export default View;
