import { createRoot } from 'react-dom/client'


export function Box(props: React.ComponentProps<'div'>) {
	const { className = '', style = {}, ...restProps } = props
	return (
		<div
			className={`box ${className}`.trim()}
			style={{ fontStyle: 'italic', ...style }}
			{...restProps}
		/>
	)
}

function App() {
	return (
		<div>
			<Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
				small lightblue box
			</Box>
			<Box className="box--medium" style={{ backgroundColor: 'pink' }}>
				medium pink box
			</Box>
			<Box className="box--large" style={{ backgroundColor: 'orange' }}>
				large orange box
			</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
