import React, { Component } from "react";
import Documents from "./components/Documents/Documents";
import './polishing.css';
import { slide as Menu } from 'react-burger-menu';

import{
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'


const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>bubblegume!</div>,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces</div>,
    main: () => <h2>Shoelaces</h2>,
  },
]


class Sidebar extends Component {

  render() {
  return (
    <Router>
      <div style={{display: 'flex'}}>
        <div style={{
          padding: '10px',
          width: '40%',
          background: '#f0f0f0'
        }}>

          <ul className='sidebar' style ={{listStyleType: 'none',padding:0}}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/bubblegum'>Bubblegum</Link></li>
          <li><Link to='shoelaces'>Shoelaces</Link></li>
          </ul>
          {routes.map((route,index) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
              />
          ))}
          </div>
          <div style={{flex:1,padding:'10x'}}>
            {routes.map((route)=>(
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
                />
            ))}
          </div>
          </div>
          </Router>
    );
  };
}
export default Sidebar;





// import React, { Component } from "react";
// import './polishing.css';
// import { slide as Menu } from 'react-burger-menu';
//
//
// class Sidebar extends Component {
//   render() {
//   return (
//     <Menu>
//     <a className = "menu-item" href = "/">
//       home
//       </a>
//
//       <a className = "menu-item" href= "/laravel">
//       laravel
//       </a>
//
//       <a className = "menu-item" href="/link2">
//         link2
//         </a>
//
//       <a className = "menu-item" href="/link3">
//       link3
//       </a>
//       </Menu>
//     );
//   };
// }
//
//
// export default Sidebar;
