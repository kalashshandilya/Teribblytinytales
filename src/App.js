import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HistogramChart from './HistogramChart';
import WordFrequency from './WordFrequency';
import ExportButton from './ExportButton';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://www.terriblytinytales.com/test.txt');
      const words = result.data.split(/\W+/);
      const wordCounts = words.reduce((acc, word) => {
        if (word) {
          acc[word] = acc[word] ? acc[word] + 1 : 1;
        }
        return acc;
      }, {});
      const data = Object.entries(wordCounts)
        .map(([word, count]) => ({ word, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 20);
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <button>Submit</button>
      {data.length > 0 && (
        <div>
          <HistogramChart data={data} />
          <WordFrequency data={data} />
          <ExportButton data={data} />
        </div>
      )}
    </div>
  );
}

export default App;
