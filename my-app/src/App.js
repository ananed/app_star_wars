import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Card from "./Card";

function App() {
  
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
      setPeople(data);
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
    <div className="all_all">
      <p className="titulo">Star Wars Catalog</p>
      <Grid columns={3}>
        {people &&
          people.map((people, i) => {
            return (
              <Link to={`/card/${people.id}`}>
                <div> <people data={people} />
                {isLoading ? (
                  <button className="boton" disabled>
                    Loading ...
                  </button>
                ) : (
                  <button className="boton" onClick={(e) => fetchNext(e)}>
                    Get more
                  </button>
                )}
                ;</div>
              </Link>
            );
          })}
      </Grid>

      <Switch>
        <Route path="/card" element={Card}></Route>
      </Switch>
    </div>
  );
}
export default App;
