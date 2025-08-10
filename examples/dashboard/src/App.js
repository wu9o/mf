import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Details from "./pages/Details";
import Overview from "./pages/Overview";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Overview />} />
				<Route path="details" element={<Details />} />
			</Route>
		</Routes>
	);
};

export default App;
