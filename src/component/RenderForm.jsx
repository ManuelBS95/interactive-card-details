import { useState, useEffect } from "react"
import { Formik } from "formik"
import { validateField } from "../lib/validateField.js"
import Finalized from "./Finalized.jsx"
import Button from "./Button.jsx"
import { useDispatch } from "react-redux"
import { updateValue } from "../store/valuesSlice.js"

const FormDisplay = () => {
	const [isConfirm, setIsConfirm] = useState(false)
	const [initialValues, setInitialValues] = useState({
		cardname: "",
		cardnumber: "",
		cardmonth: "",
		cardyear: "",
		cardcvc: "",
	})

	const dispatch = useDispatch()

	const handleOnChange = (e) => {
		setInitialValues({
			...initialValues,
			[e.target.name]: e.target.value,
		})
	}

	useEffect(() => {
		dispatch(updateValue(initialValues))
	}, [initialValues])

	if (isConfirm) {
		return <Finalized />
	}

	return (
		<>
			<Formik
				initialValues={initialValues}
				validate={validateField}
				onSubmit={() => {
					setIsConfirm(true)
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleSubmit,
					handleBlur,
				}) => (
					<form
						className="form"
						onSubmit={handleSubmit}
						onChange={handleOnChange}
					>
						<div className="input-container input-cardname">
							<h4>cardholder name</h4>
							<input
								type="text"
								name="cardname"
								className="field"
								id="cardname"
								autoComplete="off"
								value={values.cardname}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<div className="error-container">
								{touched.cardname && errors.cardname && (
									<h5>{errors.cardname}</h5>
								)}
							</div>
						</div>
						<div className="input-container input-cardmonth">
							<h4>cardholder number</h4>
							<input
								type="text"
								maxLength="16"
								name="cardnumber"
								className="field"
								id="cardnumber"
								value={values.cardnumber}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<div className="error-container">
								{touched.cardnumber && errors.cardnumber && (
									<h5>{errors.cardnumber}</h5>
								)}
							</div>
						</div>
						<div className="input-container input-cardmonthyearcvc">
							<div className="grid-col">
								<h4>exp. date (mm/yy)</h4>
								<h4>cvc</h4>
							</div>
							<div className="input-container field-cvc">
								<input
									type="text"
									maxLength="2"
									name="cardmonth"
									className="field"
									id="cardmonth"
									value={values.cardmonth}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<input
									type="text"
									maxLength="2"
									name="cardyear"
									className="field"
									id="cardyear"
									value={values.cardyear}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<input
									type="text"
									name="cardcvc"
									maxLength="3"
									className="field"
									id="cardcvc"
									value={values.cardcvc}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>
							<div className="input-errors-display">
								<div className="error-container">
									{touched.cardyear && errors.cardyear && (
										<h5>{errors.cardyear}</h5>
									)}
								</div>
								<div className="error-container">
									{touched.cardcvc && errors.cardcvc && (
										<h5>{errors.cardcvc}</h5>
									)}
								</div>
							</div>
						</div>
						<Button content="Confirm" />
					</form>
				)}
			</Formik>
		</>
	)
}

export default FormDisplay
