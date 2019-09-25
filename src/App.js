import React, { PureComponent } from 'react';

import {
  StyledToastify,
  Spinner
} from 'ui';
import Router from 'routes';

class App extends PureComponent {
  state = { isAuthorized: false }

  componentDidMount() {
    this.setState({ isAuthorized: true });
  }

  render() {
    const { isAuthorized } = this.state;
    if (!isAuthorized) { return <Spinner forseShow />; }

    return (
      <>
        <Spinner />

        <StyledToastify
          autoClose={3000}
          draggable
          newestOnTop
          closeButton={false}
        />

        <Router />
      </>
    );
  }
}

export default App;
