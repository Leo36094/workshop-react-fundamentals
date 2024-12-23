import { createRoot } from 'react-dom/client'

function App() {

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault()
		const form = event.currentTarget as HTMLFormElement
		const formData = new FormData(form)
		const data = Object.fromEntries(formData.entries())
		console.log(data)
	}

	return (
		<form action="api/onboarding" method="POST">
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" />
			</div>
			{/* 🐨 add appropriate inputs for:
				- password
				- age (accepting numbers from 0 to 200)
				- photo (restricts the input to only accept image files)
				- color
				- startDate
			 */}
			<div>
				<label htmlFor="password">
					Password:
					<input id="password" type="password" name="password" />
				</label>
			</div>
			<div>
				<label htmlFor="age">
					Age:
					<input id="age" type="number" name="age" min="0" max="200" />
				</label>
			</div>
			<div>
				<label htmlFor="photo">
					Photo:
					<input id="photo" type="file" name="photo" accept="image/*" />
				</label>
			</div>
			<div>
				<label htmlFor="favoritecolor">
					Favorite Color:
					<input type="color" id="favoritecolor" name="color" />
				</label>
			</div>
			<div>
				<label htmlFor="startDate">
					Start Date:
					<input id="startDate" type="date" name="startDate" />
				</label>
			</div>
			<button onClick={handleSubmit} type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
