import CheckImg from "/images/icon-complete.svg"

const Finalized = () => {
	return (
		<div className="finalized__container text__center">
			<img className="finalized__icon" src={CheckImg} />
			<h2 className="finalized__title">Thank you!</h2>
			<p className="finalized__paragragh">We&apos;re added your card details</p>
			<button type="submit">Continue</button>
		</div>
	)
}

export default Finalized
