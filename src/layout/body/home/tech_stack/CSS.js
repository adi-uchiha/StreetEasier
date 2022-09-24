import * as React from 'react'

function DiCss3(props) {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth={0}
			viewBox="0 0 32 32"
			height="6em"
			width="6em"
			className="duration-300 hover:text-blue-500"
			{...props}
		>
			<path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z" />
		</svg>
	)
}

export default DiCss3
