import React from 'react';
import { NavMenu } from './NavMenu';

class Layout extends React.Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container>
          {props.children}
        </Container>
      </div>
    );
  }
}

export default Layout;