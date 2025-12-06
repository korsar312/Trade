import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import AtomInput from "../../../1.Atoms/AtomInput";
import AtomButtonIcon from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import AtomButtonMain from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import Text from "../../../0.Cores/Text";
import AtomLine from "../../../1.Atoms/AtomLine";
import SubstanceItemCard from "../../../3.Substances/SubstanceItemCard";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<AtomPaper color={"MAIN_2"} extStyle={Style.wrapper}>
			<div css={Style.header}>
				<Text text={"CATALOG"} />
				<AtomLine color={"MAIN_3"} />
			</div>

			<div css={Style.btnRow}>
				<AtomInput initText={""} />
				<AtomButtonIcon color={"MAIN_3"} icon={"Message"} />
				<AtomButtonIcon color={"MAIN_3"} icon={"Message"} />
			</div>

			<div css={Style.btnRow}>
				<AtomButtonIcon color={"BLUE_1"} icon={"Message"} />
				<AtomButtonIcon color={"MAIN_3"} icon={"Message"} />
				<AtomButtonMain color={"MAIN_3"} text={"Message"} leftImage={"Message"} />
				<AtomButtonMain color={"MAIN_3"} text={"Message"} leftImage={"Message"} />
				<AtomButtonMain color={"MAIN_3"} text={"Message"} leftImage={"Message"} />
				<AtomButtonMain color={"MAIN_3"} text={"Message"} leftImage={"Message"} />
				<AtomButtonMain color={"MAIN_3"} text={"Message"} leftImage={"Message"} />
			</div>

			<div css={Style.catalogWrap}>
				<div css={Style.catalog}>
					{[1, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3].map(() => (
						<SubstanceItemCard image={"Message"} name={"df"} btn={[{ text: "asddsa", isFullWidth: true, color: "BLUE_2" }]} />
					))}
				</div>
			</div>
		</AtomPaper>
	);
};

export default View;
