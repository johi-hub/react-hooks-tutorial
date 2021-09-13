import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useForm } from "./_useForm";
import Hello from "./Hello";

const _useLayoutEffect = () => {
	const [values, handleChange] = useForm({
		email: "",
		password: "",
		firstName: "",
	});
	const [count, setCount] = useState(() =>
		JSON.parse(localStorage.getItem("count"))
	);
	const inputRef = useRef();
	const hello = useRef(() => console.log("hello"));

	const { showHello, setShowHello } = useState(true);

	useLayoutEffect(() => {
		console.log(inputRef.current.getBoundingClientRect());
	}, []);

	useEffect(() => {
		localStorage.setItem("count", JSON.stringify(count));
	}, [count]);

	return (
		<div>
			{/* <div>{!data ? "loading..." : data}</div> */}
			<div>count: {count}</div>
			<button onClick={() => setCount((c) => c + 1)}>increment</button>
			<button onClick={() => setShowHello(!showHello)}>toggle</button>
			{showHello && <Hello />}
			<input name="email" value={values.email} onChange={handleChange} />
			<input
				ref={inputRef}
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
			<button
				onClick={() => {
					inputRef.current.focus();
					hello.current();
				}}
			>
				focus
			</button>
		</div>
	);
};

export default _useLayoutEffect;
