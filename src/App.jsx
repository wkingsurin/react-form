import "./App.css";

export default function App() {
	return (
		<>
			<div className="container">
				<div className="box">
					<form action="POST" className="form">
						<h2 className="title">Sign in</h2>
						<div className="form-content">
							<label htmlFor="email" className="label">
								Email:
								<input type="text" id="email" placeholder="email@example.com" />
							</label>
							<label htmlFor="password" className="label">
								Password:
								<input type="text" id="password" placeholder="Password" />
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
