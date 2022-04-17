import React from "react";
import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";
import SlideShowComponent from "./SlideShowComponent";
import IntroComponent from "./Intro/IntroComponent";
import ProductComponent from "./Product/ProductComponent";
import PageTitleComponent from "./PageTitleComponent";
import BannerComponent from "./BannerComponent";
import PostsComponent from "./Post/PostsComponent";
import ServiceComponent from "./ServicesComponent";

export default class HomeKalles extends React.Component {
  render() {
    return (
      <>
        <HeaderComponent />

        <main className="page-main">
          <SlideShowComponent />

          <IntroComponent />

          <ProductComponent />

          <BannerComponent />

          <PageTitleComponent
            title="Top Selling"
            description={`Whether your goals are to improve weight or body composition,
						increase strength and function, or improve overall health, 
						resistance training can help you get there.`}
          />

          <ProductComponent />

          <ProductComponent />

          <PageTitleComponent
            title="Latest News"
            description={`Increased caloric expenditure can result 
						from resistance training both due to acute effects from training sessions
						and long-term effects from increased muscle mass.`}
          />

          <PostsComponent />

          <ServiceComponent />
        </main>

        <FooterComponent />
      </>
    );
  }
}
