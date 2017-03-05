import React from 'react';
import Helmet from 'react-helmet';
import FormFields from 'react-form-fields';
import Datetime from 'react-datetime';
import SelectSearch from 'react-select-search';
import Agendas from '../../utils/agendas';
import ListClass from 'react-items-list';
import { Link } from 'react-router';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | Add Meeting"
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

            <div className="right three-quarters white-bg padding-medium">
                <h2>Add Meeting</h2>
                <form onSubmit={self.validate.bind(self)}>
                  <FormFields
                    tag="input" 
                    validation="alphanumeric" 
                    ref="form-field-1"
                    attributes={{
                      type: 'text',
                      placeholder: 'Subject',
                      name: 'subject',
                      id: 'subject'
                    }}
                  />
                  <FormFields
                    tag="textarea" 
                    validation="alphanumeric" 
                    ref="form-field-2" 
                    attributes={{
                      placeholder: 'Agenda',
                      name: 'description',
                      id: 'description',
                      rows: 14
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

                  <section className="padding-medium">
                    <h3>Actions</h3>
                    <ListClass />
                  </section>
                  <button type="submit" className="btn btn-large-primary uppercase right">Create meeting <i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                </form>
            </div>
        </div>
    );
};
