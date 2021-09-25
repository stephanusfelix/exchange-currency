import React, { useState, useEffect } from "react";
import "../style/Table.scss";

const Table = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    console.log(props.data);
    const random = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 101)
    );
    setData(
      Object.keys(props.data).map((key, i) => (
        <tr key={i}>
          <td>{key}</td>
          <td>{props.data[key] - (props.data[key] * (random[i] / 100))}</td>
          <td>{random[i] / 100}</td>
          <td>{props.data[key] + (props.data[key] * (random[i] / 100))}</td>
        </tr>
      ))
    );
  }, []);
  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>WE BUY</th>
            <th>EXCHANGE RATE</th>
            <th>WE SELL</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};

export default Table;
