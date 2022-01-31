import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://www.euractiv.pl/wp-content/uploads/sites/6/2019/07/kamil-gliwinski-xcPw1-5OHTk-unsplash-800x450.jpg",
    address: "Warsaw, Polna 23",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://www.euractiv.pl/wp-content/uploads/sites/6/2019/07/kamil-gliwinski-xcPw1-5OHTk-unsplash-800x450.jpg",
    address: "Warsaw, Miejska 23",
    description: "This is a second meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
