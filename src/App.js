import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'
import VanDetail from './pages/VanDetail'
import Vans from './pages/Vans'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/vans' element={<Vans />} />
						<Route path='/vans/:id' element={<VanDetail />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
