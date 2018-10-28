import React from "react";
import ReactDOM from "react-dom";
import style from "./index.css";
import style2 from "./components/index.css";
import Component from "./Component.js";

class ProductList extends React.Component{
  render(){
    
  }
}

const Index = () => {
  return (
    <div>
      <div className={style.title}>Hdfgdfgello</div>;
      <div className={style2.title}>Hdfgdfgello</div>;
      <Component />
      
    </div>
  )
};
ReactDOM.render(<Index/>, document.getElementById('index'));
