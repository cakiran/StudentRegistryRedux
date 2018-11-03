import React, { Component } from 'react';


export default class StudentItem extends Component {
  constructor(props)
  {
    super(props);
    this.state ={isEdit:false}
    this.editStudent = this.editStudent.bind(this);
    this.editStudentSubmit = this.editStudentSubmit.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  deleteStudent()
  {
    const {id} = this.props.student;
this.props.deleteStudent(id);
  }
  editStudent()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }))
  }
  editStudentSubmit()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }));
    this.props.editStudentSubmit(this.props.student.id,this.nameInput.value,this.gradeInput.value,this.schoolInput.value);
  }
    render() {
        const {name,grade,school} = this.props.student;
      return (
        this.state.isEdit === true ? 

        <tr className="bg-warning" key={this.props.index}><td><input ref={nameInput => this.nameInput = nameInput} defaultValue ={name}/></td><td><input defaultValue={grade} ref={gradeInput => this.gradeInput = gradeInput}/></td><td><input ref={schoolInput => this.schoolInput = schoolInput} defaultValue={school}/></td><td><i className="far fa-save" onClick={this.editStudentSubmit}></i></td><td><i className="fas fa-trash"></i></td></tr>
 :
        <tr key={this.props.index}><td>{name}</td><td>{grade}</td><td>{school}</td><td><i className="far fa-edit" onClick={this.editStudent}></i></td><td><i className="fas fa-trash" onClick={this.deleteStudent}></i></td></tr>
      );
    }
  }