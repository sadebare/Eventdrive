// import { Outlet, useNavigation } from "react-router-dom"
// import { Loading, Navbar } from "../components"

const HomeLayout = () => {

  return (
    <>
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  )
}

export default HomeLayout