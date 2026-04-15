import type { TPresent } from "../";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";
import AtomButtonMain from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonMain";
import Image from "../../../Components/0.Cores/Image";
import AtomWrapper from "../../../Components/1.Atoms/AtomWrapper";
import TemplateListingDetail from "../../../Components/Templates/Comp/TemplateListingDetail";
import TemplateBtnBack from "../../../Components/Templates/Comp/TemplateBtnBack";

const View: TPresent = ({ Model, Style }) => {
	const { image, btnProps, listingId } = Model;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<AtomWrapper styleType={"col"} extStyle={Style.content}>
				<figure css={Style.imageWrap}>
					<Image size={"100%"} img={image} />
				</figure>

				<div css={Style.detailWrap}>
					<TemplateListingDetail listingId={listingId} />
				</div>
			</AtomWrapper>

			<AtomWrapper styleType={"row"}>
				{btnProps.map((el) => {
					const { id, ...rest } = el;

					return <AtomButtonMain key={id} {...rest} />;
				})}
				<TemplateBtnBack />
			</AtomWrapper>
		</AtomPaper>
	);
};

export default View;
