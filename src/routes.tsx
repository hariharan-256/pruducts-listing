import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export const AllRoutes = () => {
	return (
		<BrowserRouter basename="/pruducts-listing">
			<Routes>
				<Route path="/" element={<Home />}>
					<Route element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
