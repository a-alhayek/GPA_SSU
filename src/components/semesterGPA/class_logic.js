import React from 'react';
import ClassItem from './class_item'
import Card from 'react-bootstrap/Card'


class ClassLogic extends React.Component{

    constructor (props) {
        super(props);
    
        this.state = {
          courses: [{id: 0 , courseGrade :'' , courseCredit:'' , name:''}]
        }
        this.addCourse = this.addCourse.bind(this);
        this.handleChangeCredit = this.handleChangeCredit.bind(this);
        this.handleChangeGrade = this.handleChangeGrade.bind(this);
      }
     
    
      addCourse() {
        let lastId = this.state.courses[this.state.courses.length -1].id 
        this.setState({
          courses: [...this.state.courses , {id: lastId+1 , courseGrade:'' , courseCredit:'' , name:''}]
    
        });
      }
      

      handleChangeCredit(index,credit){
         
          const courses = this.state.courses.slice();
          courses[index] = {...courses[index],...credit};
         
          this.setState({
              courses:courses

          });

      }

      handleChangeGrade(index,grade){
      
        const courses = this.state.courses.slice();
        courses[index] = {...courses[index],...grade};
        
        this.setState({
            courses:courses

        });

      }
      
    
      CalculateGpa(totalGrade,totalCredit) {
      
          
      
    
        if( isNaN(totalGrade / totalCredit)){
          return '';
        }
        else {
          let total = (totalGrade / totalCredit).toFixed(4)
          return total;
        }
    
      }
   



      render() {

        let totalGrade = 0 , totalCredit =0;
        const courses = this.state.courses.map((course , i ) => { 

          let a = (typeof course.courseGrade);
          console.log(  a);
           

            if(!isNaN(Number(course.courseCredit)) && (course.courseGrade >=0 ) && a ==='number'){

            totalGrade+= course.courseGrade *course.courseCredit;
            totalCredit+= course.courseCredit;
            }


            return (
              <ClassItem key={course.id} id = {course.id} index={i}  handleChangeCredit={this.handleChangeCredit} handleChangeGrade={this.handleChangeGrade}/>
      
            );
      
          });


        return (
            <div>
            
            <table className="table table-striped text-center">
                <thead>
                 <tr className="bg-dark text-light"> 
                    <th>Course Name </th><th>Grade</th><th>Credits</th>
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
    <Card.Title>Your Semester GPA is</Card.Title>
    <Card.Text as ="h1">
    {this.CalculateGpa(totalGrade,totalCredit)}
    </Card.Text>
   
  </Card.Body>
</Card>
         </div>

         

        );

      }

}

export default ClassLogic;