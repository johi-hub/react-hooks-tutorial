import React, { useEffect, useState, useRef } from "react";
import { useForm } from "./_useForm";
import { useFetch } from "./_useFetch";

const _useRef = () => {
	const [values, handleChange] = useForm({
		email: "",
		password: "",
		firstName: "",
	});
	const [count, setCount] = useState(() =>
		JSON.parse(localStorage.getItem("count"))
	);
	const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
	const inputRef = useRef();

	useEffect(() => {
		localStorage.setItem("count", JSON.stringify(count));
	}, [count]);

	return (
		<div>
			<div>{!data ? "loading..." : data}</div>
			<div>count: {count}</div>
			<button onClick={() => setCount((c) => c + 1)}>increment</button>
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
				}}
			>
				focus
			</button>
		</div>
	);
};

export default _useRef;
