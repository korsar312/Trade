import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Grid from "../../../../Components/0.Cores/Grid";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<div css={Style.wrapper}>
			<Grid container>
				<Grid item xs={3} sm={3} md={3} xl={3} lg={3} />

				<Grid item xs={6} sm={6} md={6} xl={6} lg={6}>
					<div css={Style.qr}></div>
				</Grid>
			</Grid>
		</div>
	);
};

export default View;
