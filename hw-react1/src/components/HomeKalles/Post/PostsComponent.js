import React from "react";
import PostItemComponent from "./PostItemComponent";
export default class PostsComponent extends React.Component {
  state = {
    arrPosts: [
      {
        id: 1,
        src: "https://themes.the4.co/kalles-html/assets/images/home-sport/blog-01.jpg",
        title: "Tips At-home Cardio Workouts",
        date: "September 1, 2020",
        content: `Time to get your sweat on with this workout for a flat stomach!
				These are the 10 best moves to tighten up that core...`,
      },
      {
        id: 2,
        src: "https://themes.the4.co/kalles-html/assets/images/home-sport/blog-02.jpg",
        title: "5 Tips To Stay Healthy At Home",
        date: "September 1, 2020",
        content: `And now more than ever its so important to continue to take care
				of ourselves and make sure were putting extra ca...`,
      },
      {
        id: 3,
        src: "https://themes.the4.co/kalles-html/assets/images/home-sport/blog-03.jpg",
        title: "10 Minute Fat Burning Workout",
        date: "September 1, 2020",
        content: `	I know sometimes it can be difficult to keep your healthy
				nutrition on track, so thats why I created the Hot Body ...`,
      },
    ],
  };
  render() {
    const arrPosts = this.state.arrPosts;
    return (
      <section className="section-posts">
        <div className="container">
          <ul className="post-list wrap-content">
            {arrPosts.map((item) => {
              return (
                <PostItemComponent
                  key={item.id}
                  src={item.src}
                  title={item.title}
                  date={item.date}
                  content={item.content}
                />
              );
            })}
          </ul>
          <hr className="separation" />
        </div>
      </section>
    );
  }
}
