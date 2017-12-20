import React, { Component } from 'react';
import TaskList from './TaskList';
// import AddTask from './AddTask';
// import Filter from './Filter';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

const AppContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  height: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4e6e9;
  padding: 24px;
  align-items: center;
  border-radius: 16px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 40px;
`;

const ContainerFilter = styled.div`
  margin-bottom: 1em;
  align-self: flex-start;
`;

let id = 3;

class App extends Component {
  render() {
    return (
      <div>
        <h1>To-do List</h1>
        <AppContainer>
          <Container>
            {/* <ContainerFilter> <Filter/> </ContainerFilter> */}
            <TaskList/>
            {/* <AddTask/> */}
          </Container>
        </AppContainer>
      </div>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import TaskList from './TaskList';
// import PubSub from 'pubsub-js';
// import AddTask from './AddTask';
// import Filter from './Filter';
// import styled from 'styled-components';
// import MediaQuery from 'react-responsive';

// const AppContainer = styled.div`
//   display: flex;
//   box-sizing: border-box;
//   flex-direction: column;
//   align-items: center;
//   max-width: 100%;
//   height: auto;
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: #f4e6e9;
//   padding: 24px;
//   align-items: center;
//   border-radius: 16px;
//   margin-left: 16px;
//   margin-right: 16px;
//   margin-bottom: 40px;
// `;

// const ContainerFilter = styled.div`
//   margin-bottom: 1em;
//   align-self: flex-start;
// `;

// let id = 3;

// class App extends Component {
//   constructor() {
//     super();
    
//     this.state = {
      
//     }

//     this._handleDelete = this._handleDelete.bind(this);
//     this._handleConclude = this._handleConclude.bind(this);
//     this._handleAddTask = this._handleAddTask.bind(this);
//     this._handleFilter = this._handleFilter.bind(this);

//     PubSub.subscribe("DELETE_TASK", this._handleDelete);
//     PubSub.subscribe("CONCLUDE_TASK", this._handleConclude);
//     PubSub.subscribe("ADD_TASK", this._handleAddTask); //to ouvindo, se ouvir isso eu chamo o addtask
//     PubSub.subscribe("FILTER_TASK", this._handleFilter);
//   }

//   _handleDelete(msg, data) {
//     let tasks = this.state.tasks.slice();
//     let filteredTasks = this.state.filteredTasks.slice();

//     tasks.forEach((element, index, array) => {
//       if(element.id === data)
//       {
//         tasks.splice(index, 1);
//       }
//     });
//     filteredTasks.forEach((element, index, array) => {
//       if(element.id === data)
//       {
//         filteredTasks.splice(index, 1);
//       }
//     });
//     /*tasks.splice(data, 1);
//     filteredTasks.splice(data, 1);*/
//     this.setState({'tasks': tasks});
//     this.setState({'filteredTasks': filteredTasks});
//   }

//   _handleConclude(msg, data) {
//     let tasks = this.state.tasks.slice();
//     let filteredTasks = this.state.filteredTasks.slice();
//     tasks.forEach((element, index, array) => {
//       if(element.id === data)
//       {
//         element.complete = true;
//       }
//     });
//     filteredTasks.forEach((element, index, array) => {
//       if(element.id === data)
//       {
//         element.complete = true;
//       }
//     });
//     /*tasks[data].complete = true;
//     filteredTasks[data].complete = true;*/
//     this.setState({'tasks': tasks});
//     this.setState({'filteredTasks': filteredTasks});
//   }

//   _handleAddTask(msg, value) {
//     let tasks = this.state.tasks.slice();
//     let filteredTasks = this.state.filteredTasks.slice();
//     tasks.push({'text': value, 'complete': false, 'id': id++});
//     filteredTasks.push({'text': value, 'complete': false, 'id': id});
//     this.setState({'tasks': tasks});
//     this.setState({'filteredTasks': filteredTasks});
//   }

//   _handleFilter(msg, value) {
//     let filteredTasks = this.state.tasks.filter((tasks) => { 
//       return(
//         tasks.text.toUpperCase().includes(value.toUpperCase())
//       );
//     });
//     this.setState({'filteredTasks': filteredTasks});
//   }

//   render() {
//     return (
//       <div>
//         <MediaQuery maxDeviceWidth={414}>
          
//         </MediaQuery>
//         <h1>To-do List</h1>
//         <AppContainer>
//           <Container>
//             <ContainerFilter> <Filter/> </ContainerFilter>
//             <TaskList tasks={this.state.filteredTasks}/>
//             <AddTask/>
//           </Container>
//         </AppContainer>
//       </div>
//     );
//   }
// }

// export default App;
