import React from 'react';
import { CSVLink } from 'react-csv';
import './ExportButton.css';

function ExportButton(props) {
  const { data } = props;

  return (
    <div className="export-button-container">
      <CSVLink data={data} filename={'histogram.csv'} className="export-button">
        Export CSV
      </CSVLink>
    </div>
  );
}

export default ExportButton;
