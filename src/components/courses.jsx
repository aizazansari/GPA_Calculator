import React, { Component } from 'react';
import Course from './course';

class Courses extends Component {
  render() {
    const { onReset, courses, onDelete, onAdd, setCredits, setGrade } = this.props;
    return (
      <div>
      <button  onClick={onReset} className="btn btn-primary btn-sm m-2">
      Reset
      </button>
      <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
      Add
      </button>
      { this.props.courses.map(course => (
        <Course
        key={course.id}
        onDelete={onDelete}
        course={course} // passes both id and value to be used as counter.props in counter component
        setCredits={setCredits}
        setGrade={setGrade}
        />
      ))}
      </div>
    );
  }

}

export default Courses;
