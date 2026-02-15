import type { TPresent } from "../";
import { AnimatePresence, motion } from "framer-motion";

const View: TPresent = ({ Model }) => {
	const { children, motionProps, extStyle, trigger } = Model;

	return (
		<AnimatePresence mode="wait">
			<motion.div css={[extStyle]} key={trigger} {...motionProps}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default View;
