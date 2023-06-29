import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner';
import css from "./SharedLayout.module.css"

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>  
      <main>
        <Suspense fallback={
          <div className={css.Loader}>
          <RotatingLines
            strokeColor="blueviolet"
            strokeWidth="5"
            animationDuration="1.5"
            width="96"
            visible={true}
          />
          </div>}>
          <Outlet />
        </Suspense>
      </main>
    </>  
  )
}

export default SharedLayout;