import { NavLink } from 'react-router-dom'

export default function Header() {
	const activeStyles = {
		fontWeight: 'bold',
		textDecoration: 'underline',
		color: '#161616',
	}
	return (
		<header>
			<NavLink className='site-logo' to={'/'}>
				#VANLIFE
			</NavLink>
			<nav>
				<NavLink
					to={'/host'}
					style={({ isActive }) => (isActive ? activeStyles : null)}>
					Host
				</NavLink>
				<NavLink
					to={'/about'}
					style={({ isActive }) => (isActive ? activeStyles : null)}>
					About
				</NavLink>
				<NavLink
					to={'/vans'}
					style={({ isActive }) => (isActive ? activeStyles : null)}>
					Vans
				</NavLink>
			</nav>
		</header>
	)
}
