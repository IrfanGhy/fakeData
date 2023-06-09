import React, { Component } from 'react';
import moment from 'moment';
import './Notes.css';

const formatTime = 'YYYY-MM-DD HH:mm:ss';

class Notes extends Component {
  constructor() {
    super();
    // We save the first date when the data is 
    // rendered at the beginning
    this.state = {
      lastUpdate: moment().format(formatTime).toString()
    }
   
  }

  componentWillReceiveProps(nextProps) {
    // If the prop notes has changed...
    if (nextProps.notes !== this.props.notes) {
      this.setState({
        lastUpdate: moment().format(formatTime).toString()
      });
    }
  }
  render() {
    const { notes, username } = this.props;
    console.log(username)
    return (
      <div className="Notes">
        <h1>Notes:</h1>

        <ul>
          {notes.map((note, key) => (
            <li key={key}>{note.title} - {note.content}</li>
          ))}
        </ul>

        <p>Last Update: <strong>{this.state.lastUpdate}</strong>
        </p>
      </div>
    );
  }
}

export default Notes;