import React from 'react';
import Helmet from 'react-helmet';
import FormFields from 'react-form-fields';
import Datetime from 'react-datetime';
import SelectSearch from 'react-select-search';
import { Link } from 'react-router';

export default (self) => {
<<<<<<< HEAD
    return (
        <div>
            <Helmet
                title="Just Meet | Add Meeting"
            />

            <div className="left quarter">
                <nav className="side-nav">
                    <ul>
                        {self.state.menu.map((link, index) => {
                            return <li key={index}><Link to={link.path}>{link.text}</Link></li>
                        })}
                    </ul>
                </nav>
            </div>

            <div className="right three-quarters white-bg padding-medium">
                <form onSubmit={self.validate.bind(self)}>
                  <FormFields
                    tag="input" 
                    validation="alphanumeric" 
                    errorMsg="Meeting Subject is required" 
                    ref="form-field-1"  
                    required={true} 
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
                    errorMsg="Agenda is required" 
                    ref="form-field-2"  
                    required={true} 
                    attributes={{
                      placeholder: 'Agenda',
                      name: 'description',
                      id: 'description',
                      rows: 14
                    }}
                  />
                  <Datetime ref="form-field-3" inputProps={{
                    placeholder: 'Start date/time',
                    name: 'starttime',
                    id: 'starttime'
                  }}/>
                  <Datetime ref="form-field-4" inputProps={{
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
                  <button type="submit" className="btn uppercase">Submit</button>
                </form>
            </div>
        </div>
    );
=======
  return (
    <div>
      <Helmet
        title="Just Meet | Add Meeting"
      />
      <div className="container-narrow">
        <form onSubmit={self.validate.bind(self)}>
          <FormFields
            tag="input" 
            validation="alphanumeric" 
            errorMsg="Meeting Subject is required" 
            ref="form-field-1"  
            required={true} 
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
            errorMsg="Description is required" 
            ref="form-field-2"  
            required={true} 
            attributes={{
              placeholder: 'Description',
              name: 'description',
              id: 'description'
            }}
          />
          <Datetime ref="form-field-3" inputProps={{
            placeholder: 'Start date/time',
            name: 'starttime',
            id: 'starttime'
          }}/>
          <Datetime ref="form-field-4" inputProps={{
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
          <SelectSearch ref="form-field-6" options={self.state.attendees} onChange={self.updateAdmins.bind(self)} name="admins" placeholder="Invite Admins" />
          {self.state.selectedAdmins && (
            <ul className="attendees-list">
              {self.state.selectedAdmins.map((attendee, index) => {
                return (
                  <li className="attendee-option" key={`attendee-${index}`}>{attendee.name} <button onClick={attendee.remove.bind(self)}>Delete</button></li>
                );
              })}
            </ul>
          )}
          <SelectSearch ref="form-field-7" options={self.state.meetingRooms} name="room" placeholder="Meeting Room" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
>>>>>>> f94f9feb7cde4fb3c90e325f7ff75b6a8c90ae5e
};
