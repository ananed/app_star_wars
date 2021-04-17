import React, { useState, useEffect} from "react";
import PeopleContainer from "./People";


export default function People() {

    const [people, setPeople] = useState([]);
    const [next, setNext] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    //voy a cambiar el estado con los datos de la API
    useEffect(() => {
      //voy a poner la funcion fetch pero de otra forma
      async function fetchPeople() {
        let res = await fetch("https://swapi.py4e.com/api/people");
        let data = await res.json();
        setNext(data.next);
        setPeople(data.results);
      }
      fetchPeople();
    }, []);
  

    async function fetchNext(e) {
      e.preventDefault();
      setIsLoading(true);
      let res = await fetch(next);
      let data = await res.json();
      setNext(data.next);
      setPeople([...people, ...data.results]);
      setIsLoading(false);
    }
  return (
    <div className="App">
      <PeopleContainer data={people} />
      {isLoading ? (
        <button className="boton" disabled>
          Loading ...
        </button>
      ) : (
        <button className="boton" onClick={(e) => fetchNext(e)}>
          Get more
        </button>
      )}
      ;
    </div>
  );
}

