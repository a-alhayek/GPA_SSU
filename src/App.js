import React from 'react';
import './App.css';
import ClassLogic from './components/semesterGPA/class_logic';
import CumLogic from './components/cumulativeGPA/logic_cumulativeGPA';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import EasyGPA from './img/EasyGPA.jpg'
import footerWarning from './img/footerWarning.jpg'


import Image from 'react-bootstrap/Image'

function Calculator(props) {

  const condition = props.semester;
  if (condition) {
    return <ClassLogic />

  }
  else {
    return <CumLogic />
  }

}

function Header() {
  return (
    <Nav>
     <Image fluid width="100%" src={EasyGPA}  />
     <Nav.Item>
     <Nav.Link href="https://www.salemstate.edu/">SSU</Nav.Link>

     </Nav.Item>
     <Nav.Item>
     <Nav.Link href="https://ask.salemstate.edu/kb/how-calculate-grade-point-average-gpa">How to calculate GPA</Nav.Link>

     </Nav.Item>

    </Nav>
  
  );

}
function Footer() {
  return (
    <Nav>
     <Image fluid width="100%" src={footerWarning}  />

    </Nav>
  
  );

}

function RadioButtons(props) {
  return (
    <div className= "RadioButton">
      <h1 className = "GpaType"> Select a GPA type</h1>
      <label id = "labelID">
        <input type="radio" checked={props.semesterButton} onChange={props.handleSemesterButton} />
Semester Gpa
</label>
      <label id = "labelID">
        <input type="radio" checked={props.CumulativeButton} onChange={props.handleCumlativeButton} />
Cumulative Gpa
</label>
    </div>


  );



}



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      semesterButton: true,
      CumulativeButton: false,
    };

    this.handleSemesterButton = this.handleSemesterButton.bind(this);
    this.handleCumlativeButton = this.handleCumlativeButton.bind(this);


  }
  handleSemesterButton(event) {
    if (this.state.semesterButton === false) {
      this.setState({
        semesterButton: true,
        CumulativeButton: false

      });
    }
  }

  handleCumlativeButton(event) {
    if (this.state.CumulativeButton === false) {
      this.setState({
        semesterButton: false,
        CumulativeButton: true

      });
    }
  }








  render() {



    return (
      

      <div>
        <Header />


        <RadioButtons semesterButton = {this.state.semesterButton} CumulativeButton={this.state.CumulativeButton}  handleCumlativeButton={this.handleCumlativeButton}   handleSemesterButton ={this.handleSemesterButton} />

        <Calculator semester={this.state.semesterButton}/>
        <Footer/>
        

      </div>




    );

  }


}

export default App;
