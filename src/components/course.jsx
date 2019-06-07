import React, { Component } from 'react';

class Course  extends Component {
state = {
  credits: this.props.course.credits,
  grade: this.props.course.grade
};



  render() {
    return (
      <div>
      <div className="row justify-content-center mt-5">

      <input className="form-control form-control-sm col-md-3 m-2" type="text" placeholder="Course Name"/>
      <button onClick={() => this.props.onDelete(this.props.course.id)} className="btn btn-danger btn-sm m-2"> Delete </button>


      <span>
      <small className="text-muted"> Credits </small>
      <button onClick={() => this.props.setCredits(this.props.course.id, 4)} className="btn btn-warning btn-sm m-2"> 4 </button>
      <button onClick={() => this.props.setCredits(this.props.course.id, 3)} className="btn btn-warning btn-sm m-2"> 3 </button>
      <button onClick={() => this.props.setCredits(this.props.course.id, 2)} className="btn btn-warning btn-sm m-2"> 2 </button>
      <button onClick={() => this.props.setCredits(this.props.course.id, 1)} className="btn btn-warning btn-sm m-2"> 1 </button>
      </span>

      <span>
      <small className="text-muted"> Grade </small>
      <button onClick={() => this.props.setGrade(this.props.course.id, "A")} className="btn btn-success btn-sm m-2">A </button>
      <button onClick={() => this.props.setGrade(this.props.course.id, "A-")} className="btn btn-success btn-sm m-2">A-</button>
      <button onClick={() => this.props.setGrade(this.props.course.id, "B+")} className="btn btn-success btn-sm m-2">B+</button>
      <button onClick={() => this.props.setGrade(this.props.course.id, "B")} className="btn btn-info btn-sm m-2">B </button>
      <button onClick={() => this.props.setGrade(this.props.course.id, "B-")} className="btn btn-info btn-sm m-2">B-</button>
      <button onClick={() => this.props.setGrade(this.props.course.id, "C+")} className="btn btn-info btn-sm m-2">C+</button>
      <button onClick={() => this.props.setGrade(this.props.course.id, "C")} className="btn btn-warning btn-sm m-2">C </button>
      <button onClick={() => this.props.setGrade(this.props.course.id, "C-")} className="btn btn-warning btn-sm m-2">C-</button>
      <button onClick={() => this.props.setGrade(this.props.course.id, "D+")} className="btn btn-warning btn-sm m-2">D+</button>
      <button onClick={() => this.props.setGrade(this.props.course.id, "D")} className="btn btn-danger btn-sm m-2">D </button>
      <button onClick={() => this.props.setGrade(this.props.course.id, "D-")} className="btn btn-danger btn-sm m-2">D-</button>
      <button onClick={() => this.props.setGrade(this.props.course.id, "F")} className="btn btn-danger btn-sm m-2">F </button>
      </span>

      </div>
      </div>
    );
  }


}

export default Course ;
