import React from "react";
import { useSelector } from "react-redux";
import ListItem from './components/ListItem';
import Chart from './components/chart';
import './App.scss';

function App() {
  const data = useSelector(state => state.assignment.data);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9 col-md-12">
          {data.map((el, index) => (
            <ListItem key={index} data={el} />
          ))}
        </div>
        <div className="col-lg-3 col-md-12 my-2">
          <Chart data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
