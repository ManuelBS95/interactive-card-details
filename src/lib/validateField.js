export const validateField = (values) => {
	let errors = {}
	if (!values.cardname) {
		errors.cardname = "Cant be blank"
	} else if (/\d/.test(values.cardname)) {
		errors.cardname = "Must contain only letters o vowels"
	}

	if (!values.cardnumber) {
		errors.cardnumber = "Cant be blank"
	} else if (values.cardnumber.length < 16) {
		errors.cardnumber = "Must be 16 numbers"
	} else if (/\D/.test(values.cardnumber)) {
		errors.cardnumber = "Wrong format, numbers only"
	}

	if (!values.cardmonth) {
		errors.cardmonth = "Cant be blank"
	} else if (/\D/.test(values.cardmonth)) {
		errors.cardmonth = "Wrong format, number only"
	}

	if (!values.cardyear) {
		errors.cardyear = "Cant be blank"
	} else if (/\D/.test(values.cardyear)) {
		errors.cardyear = "Wrong format, number only"
	}

	if (!values.cardcvc) {
		errors.cardcvc = "Cant be blank"
	} else if (/\D/.test(values.cardcvc)) {
		errors.cardcvc = "Wrong format, number only"
	}

	return errors
}
