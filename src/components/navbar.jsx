import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
  //figure out why can't you access props in stateless functional components
  console.log('NavBar - Rendered');

  return (
    //it working fine in that guy's vids but here you can't access it
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{' '}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class NavBar extends Component { //this one works
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{' '}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
