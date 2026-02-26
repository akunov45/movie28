import AppHeader from "./components/header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import WatchMovie from "./pages/watch-movie/WatchMovie"

// dynamic route
const App = () => {
  return (
    <div>
      <BrowserRouter basename="/movie28/" >
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<WatchMovie />} />
          <Route path="/*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  )
}

export default App