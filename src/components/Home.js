import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_QUOTES } from "../gqloperations/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  if (loading) return <h1>Loading</h1>;

  if (error) {
    console.log(error);
  }
  return (
    <div className="container">
      {data.quotes.map((quote,index) => {
        return (
          <blockquote key={index}>
          {console.log(quote)}
            <h6>{quote.name}</h6>
            <p className="right-align">~{quote.by.firstName}</p>
          </blockquote>
        );
      })}

      {/* <blockquote>
        <h6>if it works dont touch it</h6>
        <p className="right-align">~ram</p>
      </blockquote> */}
    </div>
  );
}
