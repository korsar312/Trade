import type { TPresent } from "../";
import SubstanceItemCard from "../../../3.Substances/SubstanceItemCard";
import MoleculeRowControl from "../../../2.Molecules/MoleculeRowControl";
import AtomGridGroup from "../../../1.Atoms/AtomGridGroup";

const View: TPresent = ({ Model, Style }) => {
	const { filterList, itemList } = Model;

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
