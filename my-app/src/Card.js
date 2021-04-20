import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";


function Card() {
  const [person, setPerson] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const url = `https://swapi.py4e.com/api/people/${id}`;
    //voy a poner la funcion fetch pero de otra forma
    async function fetchPerson() {
      let response = await fetch(url);
      let data = await response.json();
      setPerson(data);
   
    }
    fetchPerson();
  }, [id]);

  return (
    <div className="all_all">
    <main>
      <div className="titulo">Star Wars Catalog</div>
      <Grid columns={1}>
        {person &&
              <div className="personaje">
                <div className="nombre">
                  <p>{person.name}</p>
                </div>
                <div className="col">
                  <div>
                    <p>
                      Height: <strong> {person.height}</strong>
                    </p>
                    <p>
                      Birth Year: <strong> {person.birth_year}</strong>
                    </p>
                  </div>
                  <div>
                    <p>
                      Films: <strong> {person.films.length}</strong>
                    </p>
                  </div>
                </div>
              </div>
          })
      </Grid>
    </main>
  </div>
)
}
export default Card;
