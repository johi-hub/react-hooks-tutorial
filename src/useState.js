import React from "react";
import { useForm } from "./useForm";

const App = () => {
	const [values, handleChange] = useForm({ email: "", password: "" });

	return (
		<div>
			<input name="email" value={values.email} onChange={handleChange} />
			<input
				type="password"
				value={values.password}
				name="password"
				onChange={handleChange}
			/>
		</div>
	);
};

export default App;