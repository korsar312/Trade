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
	const { itemList } = props;

	return (
		<AtomPaper color={"MAIN_2"} extStyle={Style.wrapper}>
			<div css={Style.header}>
				<Text text={"CATALOG"} />
				<AtomLine color={"MAIN_3"} />
			</div>

			<div css={Style.btnRow}>
				<AtomInput iconsLeft={"Search"} placeholder={"CATALOG_SEARCH"} initText={""} />
				<AtomButtonIcon color={"MAIN_3"} icon={"Sort"} />
				<AtomButtonIcon color={"MAIN_3"} icon={"Refresh"} />
			</div>

			<div css={Style.btnRow}>
				<AtomButtonIcon color={"BLUE_1"} icon={"PlusSquare"} />
				<AtomButtonIcon color={"MAIN_3"} icon={"Clear"} />
				<AtomButtonMain color={"MAIN_3"} text={"Message"} rightImage={"ArrowDown"} />
				<AtomButtonMain color={"MAIN_3"} text={"Message"} rightImage={"ArrowDown"} />
				<AtomButtonMain color={"MAIN_3"} text={"Message"} rightImage={"ArrowDown"} />
				<AtomButtonMain color={"MAIN_3"} text={"Message"} rightImage={"ArrowDown"} />
				<AtomButtonMain color={"MAIN_3"} text={"Message"} rightImage={"ArrowDown"} />
			</div>

			<div css={Style.catalogWrap}>
				<div css={Style.catalog}>
					{itemList.map((el) => {
						const { id, ...props } = el;

						return <SubstanceItemCard key={id} {...props} />;
					})}
				</div>
			</div>
		</AtomPaper>
	);
};

export default View;
