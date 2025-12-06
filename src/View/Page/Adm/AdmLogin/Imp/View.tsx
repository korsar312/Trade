import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Grid from "../../../../Components/0.Cores/Grid";
import TemplateFormLoginAdm from "../../../../Components/4.Templates/TemplateFormLoginAdm";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<div css={Style.wrapper}>
			<Grid container>
				<Grid item xs={3} sm={3} md={3} xl={3} lg={3} />

				<Grid item xs={6} sm={6} md={6} xl={6} lg={6}>
					<TemplateFormLoginAdm onAction={() => ""} />
				</Grid>
			</Grid>
		</div>
	);
};

export default View;
