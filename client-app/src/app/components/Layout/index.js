import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from '../NavMenu';

// export default class Layout extends Component {
//   static displayName = Layout.name;

//   render () {
//     return (
//       <>
//         <NavMenu />
//         <Container>
//           {this.props.children}
//         </Container>
//       </>
//     );
//   }
// }


const Layout =({...props})=> {
  return (
    <>
      <NavMenu />
      <Container>
        {props.children}
      </Container>
    </>
  );
}
export default Layout;