import React from "react";
import { Grid } from "semantic-ui-react";

export default function People(props) {
  return (
    <div className="all_all">
      <p className="titulo">Star Wars Catalog</p>
      <Grid columns={3}>
        {props.data &&
          props.data.map((people, i) => {
            return (
              <div>
              <div className="container">
              <div className="row">
                <strong className="nombre">{people.name}</strong>
                  <div className="col">
                    <p><strong>Height: </strong>{people.height}</p>
                  </div>
                  <div className="col">
                    <p> <strong>Birth Year: </strong>{people.birth_year}</p>
                  </div>
                  <div className="col">
                    <p><strong>Films: </strong>{people.films.length}</p>
                  </div>
              </div>
              </div>
              </div>
            );
          })}
      </Grid>
    </div>
  );
}
