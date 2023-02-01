import IconLogo from "/images/card-logo.svg"
import { useState } from "react"

function App() {
	const [cardData, setCardData] = useState({
		name: "",
		number: "",
		month: "",
		year: "",
		cvc: "",
	})

	const [isDataSend, setIsDataSend] = useState(false)

	const handleChange = (e) => {
		console.log(e.target.value)
		setCardData({ ...cardData, [e.target.name]: e.target.value })
	}

	const handleSubmitInfo = (e) => {
		e.preventDefault()
		setIsDataSend(true)
	}

	return (
		<div className="container">
			<div className="app">
				<img className="bg-main" src="/images/bg-main-mobile.png" />
				<div className="card-back">
					<div className="card-container">
						<img className="img-card" src="/images/bg-card-back.png" />
					</div>
				</div>
				<div className="card-front">
					<div className="card-container">
						<img className="img-card" src="/images/bg-card-front.png" />
						<img className="icon-logo" src={IconLogo} />
						<div>
							<p>{!isDataSend ? "0000 0000 0000 0000" : cardData.number}</p>
							<div>
								<p>{!isDataSend ? "JANE APPLESEED" : cardData.name}</p>
								<p></p>
							</div>
						</div>
					</div>
				</div>
				<form className="card-form" onSubmit={handleSubmitInfo}>
					<div>
						<label>Cardholder name</label>
						<input
							type="text"
							autoComplete="off"
							name="name"
							onChange={handleChange}
						/>
					</div>
					<div>
						<label>Card number</label>
						<input
							type="number"
							autoComplete="off"
							name="number"
							onChange={handleChange}
						/>
					</div>
					<div>
						<div>
							<label>Exp date (mm/yy)</label>
							<input
								type="number"
								autoComplete="off"
								name="month"
								onChange={handleChange}
							/>
							<input
								type="number"
								autoComplete="off"
								name="year"
								onChange={handleChange}
							/>
						</div>
						<div>
							<label>cvc</label>
							<input
								type="number"
								autoComplete="off"
								name="cvc"
								onChange={handleChange}
							/>
						</div>
					</div>
					<button>Confirm</button>
				</form>
			</div>
		</div>
	)
}

export default App
