import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { motion } from "framer-motion";
import React from "react";

type MotionDivProps = React.ComponentProps<typeof motion.div>;

function Model({ Props }: TModel<TComponent>) {
	const { children, extStyle, trigger } = Props;

	const motionProps: MotionDivProps = {
		transition: { duration: 0.3 },
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	};

	return { children, motionProps, extStyle, trigger };
}

export default Model;
