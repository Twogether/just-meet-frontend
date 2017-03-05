import React from 'react';
import Helmet from 'react-helmet';
import FormFields from 'react-form-fields';
import { Link } from 'react-router';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | Overview"
            />

            <div className="left quarter">
                <nav className="side-nav">
                    <ul>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/login">Register</a></li>
                    </ul>
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
                          id: 'email',
                          // demo only
                          value: 'jon.busby@wearetwogether.com'
                        }}
                    />
                    <FormFields
                        tag="input"  
                        ref="form-field-2"
                        attributes={{
                          type: 'password',
                          placeholder: 'Password',
                          name: 'password',
                          id: 'password',
                          // demo only
                          value: 'test1234'
                        }}
                    />
                    <button type="submit" className="btn btn-large-primary uppercase right">Login <i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                </form>
            </div>
        </div>
    );
};
