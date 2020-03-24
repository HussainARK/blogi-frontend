import React, { Fragment } from 'react';

const Error404 = () => {
  const errorStyles = {
    textAlign: "center"
  }

  return (
    <Fragment>
      <h1 style={{textAlign: 'center', fontSize: 50}}>404</h1>
      <p style={errorStyles}>Error: Page Not Found</p>
    </Fragment>
  );
}
 
export default Error404;
