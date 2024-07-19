import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "../components"

const SharedLayout = () => {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default SharedLayout