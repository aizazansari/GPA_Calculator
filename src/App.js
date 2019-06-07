import React, { Component } from 'react';
import NavBar from './components/navbar';
import Courses from './components/courses';
import './App.css';



class App extends Component {
  state = {
    courses: [
      { id: 1, credits:4, grade:"A" },
      { id: 2, credits:4, grade:"A" },
      { id: 3, credits:4, grade:"A" },
      { id: 4, credits:4, grade:"A" }
    ]
  };

  // constructor method allows u to initialize state; this.state=this.props.smth

  calculateGPA = () => {
  let totalCredits = 0
  let totalScored = 0
  this.state.courses.forEach(function(course){
    totalCredits=totalCredits+course.credits;
    let scored=0;
    switch(course.grade){
      case "A":
        scored=4;
        break;
      case "A-":
        scored=3.67;
        break;
      case "B+":
        scored=3.33;
        break;
      case "B":
        scored=3;
        break;
      case "B-":
        scored=2.67;
        break;
      case "C+":
        scored=2.33;
        break;
      case "C":
        scored=2;
        break;
      case "C-":
        scored=1.67;
        break;
      case "D+":
        scored=1.33;
        break;
      case "D":
        scored=1;
        break;
      case "D-":
        scored=0.67;
        break;
      case "F":
        scored=0;
        break;
    };
    totalScored=totalScored+(scored*course.credits);
  });
  return (totalScored/totalCredits);
};

  setCredits = (courseID, credits) => {
    const courses = this.state.courses;
    courses.forEach(function(course){
      if (course.id===courseID){
        course.credits=credits;
      };
    });
    this.setState({ courses });
  };

  setGrade = (courseID, grade) => {
      const courses = this.state.courses;
      courses.forEach(function(course){
        if (course.id===courseID){
          course.grade=grade;
        };
      });
      this.setState({ courses });
    };

  handleDelete = (courseID) => {
    const courses = this.state.courses.filter(c => c.id !== courseID);
    this.setState({courses});
  };

  handleReset = () => {
    const courses = this.state.courses.map(c => {
      c.credits=4;
      c.grade="A";
      return c;
    });
    this.setState({ courses });
  };

  handleAdd = () => {
    const courses = this.state.courses;
    const num = courses.length +1
    courses.push({id:num, credits:4, grade:"A"})
    this.setState({courses});
  };

  render(){
  return (
    <React.Fragment>
    <NavBar
    final={this.calculateGPA()}
    />
    <main className="container text-center">
    <Courses
      courses={this.state.courses}
      onReset={this.handleReset}
      onAdd={this.handleAdd}
      onDelete={this.handleDelete}
      setCredits={this.setCredits}
      setGrade={this.setGrade}
     />

    </main>
    </React.Fragment>
  );
}
}

export default App;




//
// import React from 'react';
// import NavBar from './components/navbar';
// import courses from './components/courses';
// import './App.css';
//
//
//
// function App() {
//   return (
//     <React.Fragment>
//     <NavBar />
//     <main className="container">
//     <courses />
//     </main>
//     </React.Fragment>
//   );
// }
//
// export default App;
