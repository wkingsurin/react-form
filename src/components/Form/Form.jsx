import { useState, useRef } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { formValid } from "../../assets/utlis";
import "./Form.css";

export default function Form() {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [isLoading, setIsLoading] = useState(false);

	const emailInputRef = useRef(null);
	const passwordInputRef = useRef(null);

	const onChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevForm) => ({
			...prevForm,
			[name]: value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			if (!formValid({ formData, emailInputRef, passwordInputRef })) {
				return;
			}

			setIsLoading(true);
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			if (!response.ok) {
				throw new Error(`Request failed`);
			}

			const result = await response.json();
			console.log(`Sent data:`, result);

			setFormData({ email: "", password: "" });
		} catch (err) {
			console.error(`Failed: ${err}`);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form action="" className="form" onSubmit={onSubmit} method="POST">
			<h2 className="title">Sign in</h2>
			<div className="form-content">
				<Input
					id="email"
					labelText="Email:"
					type="email"
					name="email"
					placeholder="email@example.com"
					value={formData.email}
					ref={emailInputRef}
					onChange={onChange}
				/>
				<Input
					id="password"
					labelText="Password:"
					type="password"
					name="password"
					placeholder="Password..."
					value={formData.password}
					ref={passwordInputRef}
					onChange={onChange}
				/>
				<Button type="submit" className="btn" disabled={isLoading}>
					Sign in
				</Button>
			</div>
		</form>
	);
}
