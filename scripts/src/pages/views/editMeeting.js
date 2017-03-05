import React from 'react';
import Helmet from 'react-helmet';
import ReactQuill from 'react-quill';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | View Meeting"
            />

            <div className="left quarter">
                <nav className="side-nav">
                    <ul>
                        {self.state.menu.map((link, index) => {
                            return (
                                <li key={index}>
                                    <Link to={link.path}><i className={'fa fa-' + link.icon} aria-hidden="true"></i> {link.text}</Link>
                                    <ul className="sub-menu">
                                        {link.children && link.children.map((link, index) => {
                                            return (
                                                <li key={`child-${index}`}><Link to={link.path}><i className={'fa fa-' + link.icon} aria-hidden="true"></i> {link.text}</Link></li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            <div className="three-quarters right white-bg">
                <div className="top-nav">
                    <Link to={`/meeting/${self.props.params.id}`}><i className="fa fa-chevron-left" aria-hidden="true"></i> Back to meeting</Link>
                    <Link className="right" to={`/meetings/edit/${self.props.params.id}`}><i className="fa fa-pencil" aria-hidden="true"></i> Save changes</Link>
                </div>

                <div className="container">
                    <section className="row">
                        <ReactQuill
                            theme="snow"
                            value={self.state.text}
                            onChange={self.handleChange.bind(self)}
                        />
                    </section>
                </div>
            </div>
        </div>
    );
};
