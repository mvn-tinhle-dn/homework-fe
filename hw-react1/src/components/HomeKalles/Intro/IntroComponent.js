import React from "react";
import IntroItemComponent from "./IntroItemComponent";

export default class IntroComponent extends React.Component {
  state = {
    arrIntro: [
      {
        id: 1,
        title: "ACCESSORIES",
        titleExtra: "FOR MEN",
        src: "https://themes.the4.co/kalles-html/assets/images/home-sport/banner-collection-01.jpg",
      },
      {
        id: 2,
        title: "TRAINING CLOTHING",
        titleExtra: "FOR WOMEN",
        src: "https://themes.the4.co/kalles-html/assets/images/home-sport/banner-collection-02.jpg",
      },
      {
        id: 3,
        title: "SUMMER SALE",
        titleExtra: "-50% OFF",
        src: "https://themes.the4.co/kalles-html/assets/images/home-sport/banner-collection-03.jpg",
      },
    ],
  };
  render() {
    const arrIntro = this.state.arrIntro;
    return (
      <section className="section-intro">
        <div className="container">
          <ul className="intro-list wrap-content">
            {arrIntro.map((item) => {
              return (
                <IntroItemComponent
                  key={item.id}
                  src={item.src}
                  title={item.title}
                  titleExtra={item.titleExtra}
                />
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}
