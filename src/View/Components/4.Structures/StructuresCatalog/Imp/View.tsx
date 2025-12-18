import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import SubstanceItemCard from "../../../3.Substances/SubstanceItemCard";
import MoleculeRowControl from "../../../2.Molecules/MoleculeRowControl";
import AtomGridGroup from "../../../1.Atoms/AtomGridGroup";

const View: NFC<typeof Model> = (props) => {
	const { itemList, filterList } = props;

	return (
		<div css={Style.wrapper}>
			{filterList.map((el) => {
				const { id, ...propsControl } = el;

				return (
					<div key={id} css={Style.btnRow}>
						<MoleculeRowControl {...propsControl} />
					</div>
				);
			})}

			<div css={Style.catalogWrap}>
				<AtomGridGroup>
					{itemList.map((el) => {
						const { id, ...props } = el;

						return <SubstanceItemCard key={id} {...props} />;
					})}
				</AtomGridGroup>
			</div>
		</div>
	);
};

export default View;
