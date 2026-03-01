import type { TPresent } from "../";
import TemplateCreateListing from "../../../Components/Templates/Comp/TemplateCreateListing";

const View: TPresent = ({ Model, Style }) => {
	const { typeFormat, changeTab } = Model;

	return (
		<div css={Style.wrapper}>
			<TemplateCreateListing changeTabFn={changeTab} typeItem={typeFormat} />
		</div>
	);
};

export default View;
