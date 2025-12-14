import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";
import AtomLine from "../../../Components/1.Atoms/AtomLine";
import Text from "../../../Components/0.Cores/Text";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<div css={Style.titleWrap}>
				<Text text={"Продажи"} />
				<Text text={"Покупки"} />
			</div>

			<AtomLine color={"MAIN_4"} />
		</AtomPaper>
	);
};

export default View;
