import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { Route, Switch } from "react-router-dom";

function App() {
  //se inicia con lista vacía
  const [people, setPeople] = useState([]);
  const [next, setNext] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //voy a cambiar el estado con los datos de la API
  useEffect(() => {
    //voy a poner la funcion fetch pero de otra forma
    async function fetchPeople() {
      let response = await fetch("https://swapi.py4e.com/api/people");
      let data = await response.json();
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
    <div className="all_all">
      <main>
        <div className="titulo">Star Wars Catalog</div>
        <Grid columns={3}>
          {/* se pone solo people porque ya hemos metido en ella los data.results */}
          {people &&
            people.map((people, i) => {
              return (
                <Link to={`/Card/${i + 1}`}>
                  <div className="row">
                    <div className="nombre">
                      <p>{people.name}</p>
                    </div>
                    <div className="col">
                      <div>
                        <p>
                          Height: <strong> {people.height}</strong>
                        </p>
                        <p>
                          Birth Year: <strong> {people.birth_year}</strong>
                        </p>
                      </div>
                      <div>
                        <p>
                          Films: <strong> {people.films.length}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </Grid>
        <div>
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
      </main>
    </div>
  );
}
//???
function Root() {
  return (
    <Switch>
      <Route path="/Card/:id" component={Card}></Route>
      <Route path="/" component={App}></Route>
    </Switch>
  );
}

export default Root;
