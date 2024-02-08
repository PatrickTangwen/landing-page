import React, {useState } from "react";
import Papa from "papaparse";
 const App = () => {
 
    // This state will store the parsed data
    const [data, setData] = useState([]);
 
    // This function will be called when
    // the file input changes
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        Papa.parse(file,{
            header: true,
            complete: (results) => {
                setData(results.data)
            }
        })
    };
  
    return (
        <div className="App">
            <input type="file" accept = '.csv' onChange={handleFileChange}/>
            {data.length ? (
            <table className = "table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Occupation</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row,index) => (
                    <tr key={index}>
                        <td>{row.timestamp}</td>
                        <td>{row.hr}</td>
                        <td>{row.hrv}</td>
                    </tr>
                ))}

            </tbody>
            </table>
            
            ) : null}
        </div>
    );
};



export default App;
