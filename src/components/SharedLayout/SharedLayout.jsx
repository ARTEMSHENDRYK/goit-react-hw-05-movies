import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner';
import styled from "styled-components";
import css from "./SharedLayout.module.css"

const SharedLayout = () => {
  const StyledLink = styled (NavLink)`
  color: yellow;

  &.active {
    color: blue;
  }
  `;

  return (
    <>
      <header>
        <nav className={css.nav}>
          <StyledLink className={css.styledLink} to="/">Home</StyledLink>
          <StyledLink className={css.styledLink} to="/movies">Movies</StyledLink>
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