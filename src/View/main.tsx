import { createRoot } from "react-dom/client";
import Background from "./Layout/Background";
import Pages from "./Layout/Pages";
import Initial from "./Layout/Initial";
import Modals from "./Layout/Modals";

createRoot(document.getElementById("root") || document.body).render(
	<>
		<Initial />
		<Background />
		<Pages />
		<Modals />
	</>,
);
