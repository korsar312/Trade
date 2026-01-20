import type Model from "./Model.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import SubstanceModal from "../../../Components/3.Substances/SubstanceModal";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<>
			<SubstanceModal
				isShow={true}
				color={"MAIN_3"}
				form={{
					type: "LOGIN",
					options: {
						title: "ERROR",
						labelLog: "ERROR",
						labelPas: "ERROR",
						btnImg: "ERROR",
						submit: () => "",
					},
				}}
			/>
		</>
	);
};

export default View;
