import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import Text from "../../../0.Cores/Text";
import AtomLine from "../../../1.Atoms/AtomLine";
import SubstanceItemCard from "../../../3.Substances/SubstanceItemCard";
import MoleculeRowControl from "../../../2.Molecules/MoleculeRowControl";

const View: NFC<typeof Model> = (props) => {
	const { itemList, filterList } = props;

	return (
		<AtomPaper color={"MAIN_2"} extStyle={Style.wrapper}>
			<div css={Style.header}>
				<Text text={"CATALOG"} />
				<AtomLine color={"MAIN_3"} />
			</div>

			{filterList.map((el) => {
				const { id, ...propsControl } = el;

				return (
					<div key={id} css={Style.btnRow}>
						<MoleculeRowControl {...propsControl} />
					</div>
				);
			})}

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
