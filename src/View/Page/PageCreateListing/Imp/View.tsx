import type { TPresent } from "../";
import TemplateCreateListing from "../../../Components/Templates/TemplateCreateListing";

const View: TPresent = ({ Model, Style }) => {
	const { typeFormat, changeTab } = Model;

	return (
		<div css={Style.wrapper}>
			<TemplateCreateListing changeTabFn={changeTab} typeItem={typeFormat} />
		</div>
	);
};

export default View;
