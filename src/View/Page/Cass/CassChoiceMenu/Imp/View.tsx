import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Grid from "../../../../Components/0.Cores/Grid";
import AtomPaperCard from "../../../../Components/1.Atoms/AtomPaper/Variables/AtomPaperCard";
import TemplateCardItem from "../../../../Components/4.Templates/TemplateCardItem";

const View: NFC<typeof Model> = (props) => {
	const { products } = props;

	return (
		<div css={Style.wrapper}>
			<AtomPaperCard>
				<Grid container space={3}></Grid>
			</AtomPaperCard>

			<div css={Style.bot}>
				{products.map((id) => (
					<TemplateCardItem key={id} itemId={id} />
				))}
			</div>
		</div>
	);
};

export default View;
