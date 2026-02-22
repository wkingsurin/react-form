import "./Button.css";

export default function Button({ type, className, disabled, children }) {
	return (
		<button type={type} className={className} disabled={disabled}>
			{children}
		</button>
	);
}
