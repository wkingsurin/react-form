import "./App.css";
import { useState } from "react";

export default function App() {
	const [formData, setFormData] = useState({ email: "", password: "" });

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
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
									type="text"
									id="password"
									placeholder="Password"
									value={formData.password}
									onChange={(e) =>
										setFormData((prevForm) => ({
											...prevForm,
											password: e.target.value,
										}))
									}
								/>
							</label>
							<button type="submit" className="btn">
								Enter
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
