import React from 'react';
import './WordFrequency.css';

function WordFrequency(props) {
  const { data } = props;

  return (
    <table className="word-frequency">
      <thead>
        <tr>
          <th>Word</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.word}>
            <td>{item.word}</td>
            <td>{item.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WordFrequency;
