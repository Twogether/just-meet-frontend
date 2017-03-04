import React from 'react';
import Helmet from 'react-helmet';
import FormFields from 'react-form-fields';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | Overview"
            />

            <div className="left quarter">
                <nav className="side-nav">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </nav>
            </div>

            <div className="right three-quarters white-bg padding-medium">
                <h2>Login</h2>
                <form onSubmit={self.validate.bind(self)}>
                  <FormFields
                    tag="input" 
                    validation="email" 
                    errorMsg="Email is required" 
                    ref="form-field-1"  
                    required={true} 
                    attributes={{
                      type: 'text',
                      placeholder: 'Email Address',
                      name: 'email',
                      id: 'email'
                    }}
                  />
                  <button>Login</button>
                </form>
            </div>
        </div>
    );
};
