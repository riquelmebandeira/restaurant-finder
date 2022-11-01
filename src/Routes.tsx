import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './templates/Home'
import RestaurantDetails from './templates/RestaurantDetails'
import Search from './templates/Search'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        ></Route>
        <Route
          path="/search"
          element={<Search />}
        ></Route>
        <Route
          path="/restaurant/:id"
          element={<RestaurantDetails />}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
