import { useSelector } from "react-redux"
import CardLogo from "/images/card-logo.svg"

const Cards = () => {
	const values = useSelector((store) => store.values)

	return (
		<div className="cards">
			<div className="card__container__back">
				<div className="card__back">
					<img className="card__image" src="/images/bg-card-back.png" />
					<div className="card__back__data">
						<h6>{values.cardcvc == "" ? "000" : <>{values.cardcvc}</>}</h6>
					</div>
				</div>
			</div>
			<div className="card__container__front">
				<div className="card__front">
					<img className="card__image" src="/images/bg-card-front.png" />
					<img className="card__logo" src={CardLogo} />
					<div className="card__front__data">
						<h3 className="card__front__bin">
							{values.cardnumber == "" ? (
								"0000 0000 0000 0000"
							) : (
								<>{values.cardnumber}</>
							)}
						</h3>
						<div className="card__front__name__mmyy">
							<h6>
								{values.cardname == "" ? (
									"jane applessed"
								) : (
									<>{values.cardname}</>
								)}
							</h6>
							<h6>
								{values.cardmonth == "" ? "00" : <>{values.cardmonth}</>}
								{""}/{values.cardyear == "" ? "00" : <>{values.cardyear}</>}
							</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cards
