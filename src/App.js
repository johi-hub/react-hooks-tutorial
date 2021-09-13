import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";

const App = () => {
	const [values, handleChange] = useForm({
		email: "",
		password: "",
		firstName: "",
	});

	// const [showHello, setShowHello] = useState(true);

	// useEffect(() => {
	// 	const onMouseMove = (e) => {
	// 		console.log(e);
	// 	};
	// 	window.addEventListener("mousemove");

	// 	return () => {
	// 		window.removeEventListener("mousemove", onMouseMove);
	// 	};
	// }, []);

	useEffect(() => {
		console.log("mount1");
	}, []);

	useEffect(() => {
		console.log("mount1");
	}, []);

	return (
		<div>
			{/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
			{showHello && <Hello />} */}
			<input name="email" value={values.email} onChange={handleChange} />
			<input
				name="firstName"
				value={values.firstName}
				placeholder="first name"
				onChange={handleChange}
			/>
			<input
				type="password"
				value={values.password}
				placeholder="password"
				name="password"
				onChange={handleChange}
			/>
		</div>
	);
};

export default App;
