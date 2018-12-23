import React from 'react';
import { NavLink } from 'react-router-dom';
import mainCat from './assets/main_cat.jpg';

const routes = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/author', label: 'Author' }
];

const Nav = (props) => {
  const pageClass = props.pathname.replace('/', '') || 'main';
  const links = routes.map(({ to, label }) => {
      return <NavLink className={label.toLowerCase() || 'main'} strict exact to={to}
                      key={to}>{label}</NavLink>
    }
  )

  return <nav className={pageClass}>
    {links}
    <div className="image-wrapper">
      <img src={mainCat}/>
      TEXT
    </div>
  </nav>;
}

export default Nav
