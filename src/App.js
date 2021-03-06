import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Day from "./components/Day";
import Week from "./components/Week";
import Month from "./components/Month";
import About from "./components/About";
import Greet from "./components/Greet";
// import Post from "./components/Post";




// import { connect } from "react-redux";
// import planner from "./reducers/planner";
// import { addWeek, deleteWeek, addTask, deleteTask, mark } from "./reducers/action"


const App = () => {



  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Greet} />
        <Route path="/day" component={Day} />
        <Route path="/week" component={Week} />
        <Route path="/month" component={Month} />
        <Route path="/about" component={About} />
        {/* <Route path="/:post_id" component={Post} /> */}
        
      </div>
    </BrowserRouter>
  );
}



// async componentDidMount({
//   const res = await db.collection("boards").doc("board").get()
//   const data = res.data()
//   this.setState({
//     field1: data.field1,
//   })
//   console.log(this)
// })

// addList = e => {
//   db.collection("lists").add({
//     title: this.state.item,
//     dueDate: this.state.dueDate
//   })
//   this.setState({
//     item: "",
//     dueDate: "",
//   });
// };


export default App;
