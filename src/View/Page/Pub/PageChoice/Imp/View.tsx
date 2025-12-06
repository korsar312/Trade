import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Grid from "../../../../Components/0.Cores/Grid";

const View: NFC<typeof Model> = (props) => {
	const { btnList } = props;

	return (
		<div css={Style.wrapper}>
			{btnList.map((el) => (
				<Grid key={el.name} container>
					<Grid item xs={2} sm={2} md={3} xl={3} lg={3} />

					<Grid item xs={8} sm={8} md={6} xl={6} lg={6}></Grid>
				</Grid>
			))}
		</div>
	);
};

export default View;
