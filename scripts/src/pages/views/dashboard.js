import React from 'react';
import Helmet from 'react-helmet';

export default (self) => {
  return (
    <div>
      <Helmet
        title="Just Meet"
      />
      <div className="container">
        <p>Homepage</p>
      </div>
    </div>
  );
};
