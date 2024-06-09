  /* eslint-disable no-unused-vars */
  import { useState } from "react";
  import reactLogo from "./assets/react.svg";
  import viteLogo from "/vite.svg";
  import React from 'react'
  import "./App.css";

  class Catalog extends React.Component {
    constructor() {
      super();
      this.items = [
        ["Classical Mythology", "Mark P. O. Morford", "Oxford University Press", 2002],
        ["Rules of the Wild", "Francesca Marciano", "Random House Inc", 1998, true],
        ["Clara Callan", "Richard Bruce Wright", "HarperFlamingo Canada", 2001],
        ["Wild Animus", "Rich Shapero", "Too Far", 2004, true],
        ["Tage der Unschuld", "Richard North Patterson", "Goldmann", 2000],
        ["The Hellfire Club", "Peter Straub", "Random House Inc", 1996],
        ["The Night Listener", "Armistead Maupin", "HarperCollins Publishers", 2000, true],
        ["Night Tales", "Nora Roberts", "Silhouette", 2000],
      ];
    }

    render() {
      let favItems = this.items.filter((item) => item[4]).map((item, index) => {
        return (
          <div className="col-sm-6 col-lg-4 mb-4 book" key={`fav-${index}`}>
            <div className="card center">
              <div className="card-body">
                <h5 className="card-title title">{item[0]}</h5>
                <p className="card-text author">{item[1]}</p>
                <p className="card-text text-muted publisher">
                  {item[2]} <small className="year">{item[3]}</small>
                </p>
              </div>
            </div>
          </div>
        )
      })

      let allItems = this.items.map((item, index) => {
        return (
          <div className="col-sm-6 col-lg-4 mb-4 book" key={index}>
            <div className="card center">
              <div className="card-body">
                <h5 className="card-title title">{item[0]}</h5>
                <p className="card-text author">{item[1]}</p>
                <p className="card-text text-muted publisher">
                  {item[2]} <small className="year">{item[3]}</small>
                </p>
              </div>
            </div>
          </div>
        );
      });
      return (
        <>
          <div className="container py-3">
            <h2 className="pb-2 mb-4 border-bottom text-start">Favourite</h2>
            <div className="row">
              {favItems}
            </div>
            <h2 className="pb-2 mb-4 mt-4 border-bottom text-start">Our Books</h2>
            <div className="row">
              {allItems}
            </div>
          </div>
        </>
      );
    }
  }

  export default Catalog;
