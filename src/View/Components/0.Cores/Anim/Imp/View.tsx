import type Model from "./Model.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import { AnimatePresence, motion } from "framer-motion";

const View: NFC<typeof Model> = (props) => {
	const { children, motionProps, extStyle, trigger } = props;

	return (
		<AnimatePresence mode="wait">
			<motion.div css={[extStyle]} key={trigger} {...motionProps}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default View;
