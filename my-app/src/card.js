import React from "react";


export default function Card(props) {
  return (
    <div>
      <p >Star Wars Catalog</p>
      return (
      <div>
        <div >
          <div >
            <strong >{people.name}</strong>
            <div >
              <p>
                <strong>Height: </strong>
                {people.height}
              </p>
            </div>
            <div>
              <p>
                {" "}
                <strong>Birth Year: </strong>
                {people.birth_year}
              </p>
            </div>
            <div className="col">
              <p>
                <strong>Films: </strong>
                {people.films.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
