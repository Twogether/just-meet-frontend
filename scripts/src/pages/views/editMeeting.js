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

            <div className="full-width white-bg">
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
