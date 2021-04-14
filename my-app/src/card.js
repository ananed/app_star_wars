import React from "react";
import { Grid } from "semantic-ui-react";

export default function People(props) {
  return (
    <div className="all">
      <p className="titulo">Star Wars Catalog</p>
      <Grid columns={1}>
        {props.data &&
          props.data.map((people, i) => {
            return (
              <div>
              <div className="all">
              <div className="titulo_card" href="./card.js">
                <strong className="nombre">{people.name}</strong>
                  <p className="elemento">
                    <strong>Height: </strong>
                    {people.height}
                  </p>
                  <p className="elemento">
                    <strong>Birth Year: </strong>
                    {people.birth_year}
                  </p>
                  <p className="elemento">
                    <strong>Films: </strong>
                    {people.films.length}
                  </p>
                
              </div>
              </div>
              </div>
            );
          })}
      </Grid>
    </div>
  );
}
