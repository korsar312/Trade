import { createRoot } from "react-dom/client";
import LayoutInitial from "./Layout/LayoutInitial";
import LayoutBackground from "./Layout/LayoutBackground";
import LayoutPages from "./Layout/LayoutPages";
import LayoutModals from "./Layout/LayoutModals";

createRoot(document.getElementById("root") || document.body).render(
	<>
		<LayoutInitial />
		<LayoutBackground />
		<LayoutPages />
		<LayoutModals />
	</>,
);
