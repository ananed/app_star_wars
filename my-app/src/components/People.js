import React from "react";
import {Card, Grid} from 'semantic-ui-react';


export default function People(){
      return(
            <div>
            <p>People</p>
            <Grid columns={3}>
             {data.map((people, i)=> {
                   return(
                         <Grid.Column key={i}>
                         <Card>
                         <Card.Content>
                         <Card.Content>{people.name}</Card.Content>
                         <Card.Description>
                         <strong>Height</strong>
                         <p>{people.height}</p>
                         <strong>Birth year</strong>
                         <p>{people.birth_year}</p>
                         <strong>Films</strong>
                         <p>{people.films+ "films"}</p>
                         </Card.Description>
                         </Card.Content>
                         </Card>
                         </Grid.Column>
                   )
             })}
            </Grid>
            </div>
      );
}