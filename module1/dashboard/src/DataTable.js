import React from 'react';
import './App.css'

function DataTable({ data }) {
  return (
    <table>
      <thead>
          {/* Assuming your data has keys 'id', 'name', 'value' etc. Adjust as per your dataset */}
          <th>Rank</th>
          <th>Country</th>
          <th>Score</th>
          <th>GDP per Capita</th>
          <th>Social Support</th>
          <th>Healthy Life Expectancy</th>
          <th>Freedom to make Life Choices</th>
          <th>Generosity</th>
          <th>Perceptions of Corruption</th>
          {/* Add more <th> elements for other data keys */}
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.rank}</td>
            <td>{item.country}</td>
            <td>{item.score}</td>
            <td>{item.gdp}</td>
            <td>{item.social_support}</td>
            <td>{item.life_expectancy}</td>
            <td>{item.freedom}</td>
            <td>{item.generosity}</td>
            <td>{item.corruption}</td>
            {/* Add more <td> elements for other data values */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
