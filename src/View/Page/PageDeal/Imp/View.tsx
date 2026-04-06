import type { TPresent } from "../";
import Image from "../../../Components/0.Cores/Image";
import TemplateItemDetail from "../../../Components/Templates/Comp/TemplateItemDetail";
import AtomWrapper from "../../../Components/1.Atoms/AtomWrapper";
import AtomButtonMain from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonMain";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";

const View: TPresent = ({ Model, Style }) => {
	const { image, btnProps, itemId, goBack } = Model;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<main css={Style.content}>
				<figure css={Style.imageWrap}>
					<Image size={"100%"} img={image} />
				</figure>

				<div css={Style.detailWrap}>
					<TemplateItemDetail itemId={itemId} />
				</div>
			</main>

			<AtomWrapper styleType={"row"}>
				{btnProps.map((el) => {
					const { id, ...rest } = el;

					return <AtomButtonMain key={id} {...rest} />;
				})}
				<AtomButtonMain text={"BACK"} color={"MAIN_3"} click={goBack} />
			</AtomWrapper>
		</AtomPaper>
	);
};

export default View;
