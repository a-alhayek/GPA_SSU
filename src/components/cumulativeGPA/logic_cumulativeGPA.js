import React from 'react';
import CumItem from './cum_item';
import CumGpa from './class_cumulativeGPA';
import Card from 'react-bootstrap/Card'







class CumLogic extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      courses: [{ id: 0, courseGrade: '', courseCredit: '', name: '', isRepeat: false, prevGrade: '' }],
      cumGpaUnits: '',
      cumGpa: ''
    }
    this.addCourse = this.addCourse.bind(this);
    this.handleChangeCredit = this.handleChangeCredit.bind(this);
    this.handleChangeGrade = this.handleChangeGrade.bind(this);
    this.handleChangeRepeat = this.handleChangeRepeat.bind(this);
    this.handlePrevChangeGrade = this.handlePrevChangeGrade.bind(this);
    this.handleChangeUnites = this.handleChangeUnites.bind(this);
    this.handleChangeGPA = this.handleChangeGPA.bind(this);

  }
  handleChangeUnites(cumGpaUnits) {

    this.setState({
      cumGpaUnits: cumGpaUnits

    });


  }

  handleChangeGPA(cumGpa) {
    this.setState({
      cumGpa: cumGpa

    });



  }



  handleChangeRepeat(index, checked) { // this will handleif it is repeat or not
    const courses = this.state.courses.slice();

    courses[index] = { ...courses[index], ...checked };

    this.setState({
      courses: courses

    });
  }


  addCourse() {
    let lastId = this.state.courses[this.state.courses.length - 1].id
    this.setState({
      courses: [...this.state.courses, { id: lastId + 1, courseGrade: '', courseCredit: '', name: '', isRepeat: false, prevGrade: '' }]

    });
  }


  handleChangeCredit(index, credit) {

    const courses = this.state.courses.slice();
    courses[index] = { ...courses[index], ...credit };

    this.setState({
      courses: courses

    });

  }

  handlePrevChangeGrade(index, grade) {
    const courses = this.state.courses.slice();
    courses[index] = { ...courses[index], ...grade };

    this.setState({
      courses: courses

    });


  }

  handleChangeGrade(index, grade) {

    const courses = this.state.courses.slice();
    courses[index] = { ...courses[index], ...grade };

    this.setState({
      courses: courses

    });

  }



  CalculateGpa(totalGrade, totalCredit, totalPrevGrade, currentGrade) {
    let cumTotalGrade = 0;
    let j = Object.values(this.state.cumGpaUnits);
    let i = Object.values(this.state.cumGpa);
    j = Number(j);
    i = Number(i);

    if (i < 0 || i > 4) {
      return "Please enter valid Cumulative GPA";

    }


    if (i > 0 && j > 0) {

      cumTotalGrade = i * j
      cumTotalGrade -= totalPrevGrade;
      cumTotalGrade += currentGrade;

      totalCredit = Number(totalCredit);
      // cumTotalGrade += totalGrade;
      // j += totalCredit;
      cumTotalGrade += totalGrade;
      j += totalCredit;
      if((cumTotalGrade / j) <0 || (cumTotalGrade / j) >4){
        return "GPA can't be greater than 4 or less than 0.";

      }

      return (cumTotalGrade / j).toFixed(3);


    }

  }




  render() {

    let totalGrade = 0, totalCredit = 0, totalPrevGrade = 0, currentGrade = 0;

    const courses = this.state.courses.map((course, i) => {





      if (course.isRepeat === true && course.prevGrade > 0) {
        totalPrevGrade += course.prevGrade * course.courseCredit;
        currentGrade += course.courseCredit * course.courseGrade;

      }
      else {
        totalGrade += course.courseGrade * course.courseCredit;
        totalCredit += course.courseCredit;
      }




      return (

        <CumItem key={course.id} id={course.id} index={i} handleChangeCredit={this.handleChangeCredit} handleChangeGrade={this.handleChangeGrade}
          handlePrevChangeGrade={this.handlePrevChangeGrade} handleChangeRepeat={this.handleChangeRepeat} isVisable={this.state.courses[i].isRepeat} />

      );

    });


    return (
      <div>
        <CumGpa handleChangeUnites={this.handleChangeUnites} handleChangeGPA={this.handleChangeGPA} />

        <table className="table table-striped text-center">
          <thead>
            <tr className="bg-dark text-light">
              <th>Course Name </th><th>Grade</th><th>Credits</th><th>Is Repeat?</th><th>Previous Grade</th>
            </tr>
          </thead>
          <tbody>
            {courses}
          </tbody>
        </table>
        <button className="btn btn-dark d-block m-auto" onClick={this.addCourse}> Add Another Class</button>


        <Card>
          <Card.Header as="h5"> </Card.Header>
          <Card.Body>
            <Card.Title>Your Cumulative GPA is</Card.Title>
            <Card.Text as="h1">
              {this.CalculateGpa(totalGrade, totalCredit, totalPrevGrade, currentGrade)}
            </Card.Text>

          </Card.Body>
        </Card>



      </div>



    );

  }









}

export default CumLogic;
