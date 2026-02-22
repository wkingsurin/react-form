import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef((props, ref) => {
	const { id, labelText, type, name, placeholder, value, onChange } = props;

	return (
		<label htmlFor={id} className="label">
			{labelText}
			<input
				name={name}
				type={type}
				id={id}
				placeholder={placeholder}
				value={value}
				ref={ref}
				onChange={onChange}
			/>
		</label>
	);
});

export default Input;
