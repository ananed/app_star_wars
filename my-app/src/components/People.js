import React from "react";
import { Grid } from "semantic-ui-react";

export default function People(props) {
  return (
    <div className="all">
      <p className="titulo">Star Wars Catalog</p>
      <Grid columns={3}>
        {props.data &&
          props.data.map((people, i) => {
            return (
              <div>
              <div className="titulo_card">
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
            );
          })}
      </Grid>
    </div>
  );
}
