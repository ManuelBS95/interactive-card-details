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
						<div className="form__input__container">
							<h4>cardholder name</h4>
							<input
								type="text"
								name="cardname"
								className="form__input"
								autoComplete="off"
								placeholder="e.g. Jane Applessed"
								value={values.cardname}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<div className="form__error__container">
								{touched.cardname && errors.cardname && (
									<h5>{errors.cardname}</h5>
								)}
							</div>
						</div>
						<div className="form__input__container">
							<h4>cardholder number</h4>
							<input
								type="text"
								maxLength="16"
								name="cardnumber"
								className="form__input"
								placeholder="e.g. 1234 5678 9123 0000"
								value={values.cardnumber}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<div className="form__error__container">
								{touched.cardnumber && errors.cardnumber && (
									<h5>{errors.cardnumber}</h5>
								)}
							</div>
						</div>
						<div className="form__input__container">
							<div className="form__input__label">
								<h4>exp. date (mm/yy)</h4>
								<h4>cvc</h4>
							</div>
							<div className="form__input__container form__input__mmyycvc">
								<input
									type="text"
									maxLength="2"
									name="cardmonth"
									className="form__input"
									placeholder="MM"
									value={values.cardmonth}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<input
									type="text"
									maxLength="2"
									name="cardyear"
									className="form__input"
									placeholder="YY"
									value={values.cardyear}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<input
									type="text"
									name="cardcvc"
									maxLength="3"
									className="form__input"
									placeholder="e.g. 123"
									value={values.cardcvc}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>
							<div className="form__input__container__mmyy">
								<div className="form__error__container">
									{touched.cardyear && errors.cardyear && (
										<h5>{errors.cardyear}</h5>
									)}
								</div>
								<div className="form__error__container">
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
