import { useEffect, useState } from 'react';
import './App.css';
import Button from '../Components/Button/Button';
import Card from '../Components/Card/Card';
import Table from '../Components/Table/Table';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((res) => res.text())
      .then(setMessage);
  }, []);

  return(
    <>
      <Table> <Card name="King of Hearts" value={10}></Card>; </Table>
    </>
  );
}

export default App;