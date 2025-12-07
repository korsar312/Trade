import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import SubstanceRowControl from "../../../3.Substances/SubstanceRowControl";

const View: NFC<typeof Model> = (props) => {
	const { innerStruct, wrapProp } = props;

	return (
		<AtomPaper {...wrapProp} extStyle={[Style.wrapper, wrapProp.extStyle]}>
			<SubstanceRowControl {...innerStruct} />
		</AtomPaper>
	);
};

export default View;
