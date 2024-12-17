import { createRoot } from 'react-dom/client'

type BoxSize = 'small' | 'medium' | 'large'
interface sizeProps {
	size?: BoxSize
}

export function Box({
	// 💯 you can keep the style and className props here, but you can make this
	// still work if you remove them. Give that a shot if you want.
	style = {},
	className = '',
	// 🐨 add a size prop here
	size,
	...otherProps // 🦺 intersect (&) this with an object that has a size prop type here which is
	// optional and is one of "small", "medium", or "large"
}: React.ComponentProps<'div'> & sizeProps) {
	// 🐨 based on the size prop, define a new variable called sizeClassName
	const sizeMap: Record<BoxSize, string> = {
		small: 'box--small',
		medium: 'box--medium',
		large: 'box--large',
	}
	const sizeClass = size ? sizeMap[size] : ''
	return (
		<div
			// 🐨 add the sizeClassName to the className prop
			// 💯 for something extra, handle the case where no className is given (remove extra spaces).
			className={['box', sizeClass].filter(Boolean).join(' ')}
			style={{ fontStyle: 'italic', ...style }}
			{...otherProps}
		/>
	)
}

function App() {
	return (
		<div>
			{/* 🐨 update all these boxes to use the size prop */}
			<Box size="small" style={{ backgroundColor: 'lightblue' }}>
				small lightblue box
			</Box>
			<Box size="medium" style={{ backgroundColor: 'pink' }}>
				medium pink box
			</Box>
			<Box size="large" style={{ backgroundColor: 'orange' }}>
				large orange box
			</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
