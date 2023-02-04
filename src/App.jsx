import RenderForm from "./component/RenderForm.jsx"
import Cards from "./component/Cards.jsx"
import Background from "./component/Background.jsx"

function App() {
	return (
		<div className="app">
			<div className="app__container">
				<Background />
				<Cards />
				<RenderForm />
			</div>
		</div>
	)
}

export default App
