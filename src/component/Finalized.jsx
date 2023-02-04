import CheckImg from "/images/icon-complete.svg"

const Finalized = () => {
	return (
		<div className="complete-container">
			<img className="img-check" src={CheckImg} />
			<p className="complete-title">Thank you!</p>
			<p className="complete-text">We&apos;re added your card details</p>
			<button type="submit" className="btn-style">
				Continue
			</button>
		</div>
	)
}

export default Finalized
