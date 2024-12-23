import * as React from 'react';
import { createRoot } from 'react-dom/client'

function App() {
	// 🐨 render a form
	//   🐨 render a "Username" label
	//   🐨 render an input with the name "username"
	//   🐨 render a button
	// 💯 associate the label to the input using htmlFor and id attributes
	// 💯 explicitly set the button type appropriately
	const [username, setUsername] = React.useState('')

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		// 處理表單提交，例如發送到伺服器
		console.log(event)
		console.log({ username })
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="username">
				Username
				<input
					name="username"
					id="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</label>
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
