
import React from "react";
import People from './components/People';
import {BrowserRouter as Router} from 'react-router-dom';

function App(){
  //inicializo el estado inicial de esto
  const [people, setPeople] = useState([]);
 //voy a cambiar el estado con los datos de la API
  useEffect(() => {
    //voy a poner la funcion fetch pero de otra forma
    async function fetchPeople(){
    let res = await fetch('https://swapi.py4e.com/api/people/?format=json');
    let data = res.json();
    setPeople(data.results);
    }

    fetchPeople();
    }, [])

console.log('people', people);
return(
  <div className='App'>
  <Route exact path='/people'>
  <People data={people}/>
  </Route>
  </div>
)
}

export default App;




