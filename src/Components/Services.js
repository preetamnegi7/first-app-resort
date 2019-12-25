import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Costomers can enjoy unlimited beverages"
      },
      {
        icon: <FaHiking />,
        title: "free Hiking",
        info: "Trekking in Himayalas"
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info: "Free shuttle van pick and drop"
      },
      {
        icon: <FaBeer />,
        title: "Beer Dba ke",
        info: "Free beer services"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
