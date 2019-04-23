import React from "react";
import "./Table.css";

const Table = (props) => {
  const today = props.table[0] ? props.table[0] : '';
  const tomorrow = props.table[1] ? props.table[1] : '';
  const dat = props.table[2] ? props.table[2] : '';

  return(
    <div className="table-area">
      <table className="table" border="1" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th className="date"> {`今日（${today.date || ''}）の天気`} </th>
            <th className="date"> {`明日（${tomorrow.date || ''}）の天気`} </th>
            <th className="date"> {`明後日（${dat.date || ''}）の天気`} </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="weather-state"> {today.telop} </th>
            <th className="weather-state"> {tomorrow.telop} </th>
            <th className="weather-state"> {dat.telop} </th>
          </tr>
          <tr>
            <th className="temperature-max"> {`最高気温：${today.temperatureMax || ''}`} </th>
            <th className="temperature-max"> {`最高気温：${tomorrow.temperatureMax || ''}`} </th>
            <th className="temperature-max"> {`最高気温：${dat.temperatureMax || ''}`} </th>
          </tr>
          <tr>
          <th className="temperature-min"> {`最低気温：${today.temperatureMin || ''}`} </th>
          <th className="temperature-min"> {`最低気温：${tomorrow.temperatureMin || ''}`} </th>
          <th className="temperature-min"> {`最低気温：${dat.temperatureMin || ''}`} </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default Table;
