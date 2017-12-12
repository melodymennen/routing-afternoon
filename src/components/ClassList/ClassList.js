import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }

  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(response => this.setState({students: response.data}))
  }

  render() {
    const students = this.state.students.map((students, i) => {
      <h3 key={i}>{`${students.first_name} ${students.last_name}`}</h3>
    })

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}

      </div>
    )
  }
    
}