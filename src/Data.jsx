import React, {useState} from 'react';
import datas from './datas.json';

const Data = () => {
    const [Data, setData] = useState(datas); 
    const Clear = () => {
            setData([]);
        }
        const handleRemove = (id) => () => {
            setData(Data.filter(item => item.id!== id));
        }
        const handleUpdate = (id) => () => {
            const item = Data.find(item => item.id === id);
            const index = Data.indexOf(item);
            setData([...Data.slice(0, index), {...item, name: prompt('Enter new name')},...Data.slice(index + 1)]);
        }
  return (
    <div>
      <h1>Data from JSON:</h1>
      <ul>
        {
            Data.map(items=>
                <li key="{ items.id}">
                        {items.name}
                        <br />
                        <br />
                        <button onClick={handleRemove(items.id)}>remove</button>
                        <button onClick={handleUpdate(items.id)}>Update</button>
                </li>
            )
        }
      </ul>
      <button onClick={Clear}>Clear</button>
      
    </div>
  );
}

export default Data;
