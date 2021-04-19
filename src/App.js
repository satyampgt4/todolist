import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [newtask, setnewtask] = useState();
  const [task, settask] = useState([]);

  const inputtask = (event) => {
      setnewtask(event.target.value);
  };

  const addNewtask = () =>{
      settask((oldtask) =>{
        return[...oldtask,newtask];
      });
      setnewtask("");
  };
  const removetask = (id) =>{

    settask((oldtask) =>{
      return oldtask.filter((arrele, index)=>{
        return index!= id;
      }
      );
    });
  }

  return (
    <>
      <div className = "container">
        <div className = "containt">
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type ="text" placeholder =" Add a Task" onChange = {inputtask} value ={newtask}/>

            <i class="fas fa-plus-circle" onClick = {addNewtask}></i>
          <ol>
            {
            task.map((taskvalue,index) =>{
              return (<div className="task">
                <i className="fas fa-times-circle"
                  onClick = {() => removetask(index)}
                  ></i>
                <li>{taskvalue}</li>
                </div>)
              
              ;
            })
          }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
