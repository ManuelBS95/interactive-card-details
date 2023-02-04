import { useSelector } from "react-redux"

const Cards = () => {
	const values = useSelector((store) => store.values)

	return (
		<div>
			<img className="" src="/images/bg-main-mobile.png" />
			<div>
				<div className="absolute inline__block card__back__position">
					<div className="relative text__white">
						<img className="card__image" src="/images/bg-card-back.png" />
						<h6 className="absolute card__cvc">
							{values.cardcvc == "" ? "000" : <>{values.cardcvc}</>}
						</h6>
					</div>
				</div>
				<div className="absolute inline__block card__front__position">
					<div className="relative text__white">
						<img className="card__image" src="/images/bg-card-front.png" />
						<div className="flex flex__col absolute card__front__data">
							<h3 className="card__bin">
								{values.cardnumber == "" ? (
									"0000 0000 0000 0000"
								) : (
									<>{values.cardnumber}</>
								)}
							</h3>
							<div className="flex flex__row flex__space__betwen">
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
			<div id="div-number"></div>
		</div>
	)
}

export default Cards
