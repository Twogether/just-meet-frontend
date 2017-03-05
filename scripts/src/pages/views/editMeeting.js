import React from 'react';
import Helmet from 'react-helmet';
import ReactQuill from 'react-quill';
import { Link } from 'react-router';
import FormFields from 'react-form-fields';
import { browserHistory } from 'react-router';
import Datetime from 'react-datetime';
import SelectSearch from 'react-select-search';

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

            <div className="right three-quarters white-bg">
                <div className="top-nav">
                    <Link to={`/meeting/${self.props.params.id}`}><i className="fa fa-chevron-left" aria-hidden="true"></i> Back to meeting</Link>
                </div>

                <div className="padding-medium">
                    <h2>Edit Meeting</h2>
                    <form onSubmit={self.validate.bind(self)}>
                      <FormFields
                        tag="input" 
                        validation="alphanumeric" 
                        ref="form-field-1"
                        attributes={{
                          type: 'text',
                          placeholder: 'Subject',
                          name: 'subject',
                          id: 'subject',
                          value: self.state.meeting ? self.state.meeting.name : null
                        }}
                      />
                      <section className="row">
                          <ReactQuill
                              theme="snow"
                              value={self.state.text}
                              onChange={self.handleChange.bind(self)}
                          />
                      </section>
                      <FormFields
                        tag="textarea" 
                        validation="alphanumeric" 
                        ref="form-field-2" 
                        attributes={{
                          placeholder: 'Agenda',
                          name: 'description',
                          id: 'description',
                          rows: 14,
                          value: self.state.meeting ? self.state.meeting.agenda : null
                        }}
                      />
                      <Datetime ref="form-field-3" onChange={self.changeStartDate.bind(self)} inputProps={{
                        placeholder: 'Start date/time',
                        name: 'starttime',
                        id: 'starttime'
                      }}/>
                      <Datetime ref="form-field-4" onChange={self.changeEndDate.bind(self)} inputProps={{
                        placeholder: 'End date/time',
                        name: 'endtime',
                        id: 'endtime'
                      }}/>
                      <SelectSearch ref="form-field-5" options={self.state.attendees} onChange={self.updateAttendees.bind(self)} name="attendees" placeholder="Invite Attendees" />
                      {self.state.selectedAttendees && (
                        <ul className="attendees-list">
                          {self.state.selectedAttendees.map((attendee, index) => {
                            return (
                              <li className="attendee-option" key={`attendee-${index}`}>{attendee.name} <button onClick={attendee.remove.bind(self)}>Delete</button></li>
                            );
                          })}
                        </ul>
                      )}
                      <SelectSearch ref="form-field-6" options={self.state.meetingRooms} name="room" placeholder="Meeting Room" />
                      <div className="text-right">
                        <button type="submit" className="btn btn-large-primary uppercase">Save changes <i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                      </div>
                    </form>

                </div>
            </div>
        </div>
    );
};
