export const highlightField = (field, delay = 1500) => {
	field.style.border = `2px solid crimson`;

	setTimeout(() => {
		field.style.border = ``;
	}, delay);
};

export const formValid = (options) => {
	const { formData, emailInputRef, passwordInputRef } = options;

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
