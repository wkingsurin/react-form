import "./App.css";
import { useState, useRef } from "react";

export default function App() {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [isLoading, setIsLoading] = useState(false);

	const emailInputRef = useRef(null);
	const passwordInputRef = useRef(null);

	const highlightField = (field, delay = 1500) => {
		field.style.border = `2px solid crimson`;

		setTimeout(() => {
			field.style.border = ``;
		}, delay);
	};

	const formValid = () => {
		if (!formData.email || !formData.password) {
			highlightField(emailInputRef.current);
			highlightField(passwordInputRef.current);
			return false;
		}
		if (formData.password.length < 8) {
			highlightField(passwordInputRef.current);
			return false;
		}
		return true;
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			if (!formValid()) {
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
		<>
			<div className="container">
				<div className="box">
					<form action="" className="form" onSubmit={onSubmit} method="POST">
						<h2 className="title">Sign in</h2>
						<div className="form-content">
							<label htmlFor="email" className="label">
								Email:
								<input
									type="text"
									id="email"
									placeholder="email@example.com"
									value={formData.email}
									ref={emailInputRef}
									onChange={(e) =>
										setFormData((prevForm) => ({
											...prevForm,
											email: e.target.value,
										}))
									}
								/>
							</label>
							<label htmlFor="password" className="label">
								Password:
								<input
									type="password"
									id="password"
									placeholder="Password"
									value={formData.password}
									ref={passwordInputRef}
									onChange={(e) =>
										setFormData((prevForm) => ({
											...prevForm,
											password: e.target.value,
										}))
									}
								/>
							</label>
							<button type="submit" className="btn" disabled={isLoading}>
								Enter
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
