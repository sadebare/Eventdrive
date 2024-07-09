import { Link } from "react-router-dom";


const Error = () => {
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <div className="text-center">
        <img src='' alt="error page" className="w-96"/>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          Ohh! Page not found
        </h1>
        <p className="mt-6 text-lg leading-7 tracking-tighter">
          Sorry, we could not find the page you are looking for. 
        </p>
        <div className="mt-10">
          <Link to='/' className="btn btn-accent">
            go back
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Error