import type { TPresent } from "../";
import Image from "../../../Components/0.Cores/Image";
import AtomWrapper from "../../../Components/1.Atoms/AtomWrapper";
import AtomButtonMain from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonMain";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";
import TemplateListingDetail from "../../../Components/Templates/Comp/TemplateListingDetail";
import TemplateItemDetail from "../../../Components/Templates/Comp/TemplateItemDetail";
import TemplateBtnBack from "../../../Components/Templates/Comp/TemplateBtnBack";
import TemplateDealChat from "../../../Components/Templates/Comp/TemplateDealChat";

const View: TPresent = ({ Model, Style }) => {
	const { image, listingId, dealId, success, cancel } = Model;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<main css={Style.content}>
				<figure css={Style.imageWrap}>
					<Image size={"100%"} img={image} />
				</figure>

				<div css={Style.detailWrap}>
					<AtomWrapper styleType={"col"}>
						<TemplateListingDetail listingId={listingId} />
						<TemplateItemDetail itemId={listingId} />
						<TemplateDealChat dealId={dealId} />
					</AtomWrapper>
				</div>
			</main>

			<AtomWrapper styleType={"col"}>
				<AtomButtonMain isFullWidth text={"CONFIRM_RECEIPT"} color={"BLUE_2"} click={success} />

				<AtomWrapper styleType={"row"}>
					<AtomButtonMain isFullWidth text={"DISPUTE"} color={"RED_1"} click={cancel} />
					<TemplateBtnBack isFullWidth />
				</AtomWrapper>
			</AtomWrapper>
		</AtomPaper>
	);
};

export default View;
