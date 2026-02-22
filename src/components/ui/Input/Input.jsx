import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef((props, ref) => {
	const { id, labelText, type, placeholder, value, setFormData } = props;

	return (
		<label htmlFor={id} className="label">
			{labelText}
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				value={value}
				ref={ref}
				onChange={(e) =>
					setFormData((prevForm) => ({
						...prevForm,
						[type]: e.target.value,
					}))
				}
			/>
		</label>
	);
});

export default Input;
