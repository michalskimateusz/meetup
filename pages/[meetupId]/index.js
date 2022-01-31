import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://www.euractiv.pl/wp-content/uploads/sites/6/2019/07/kamil-gliwinski-xcPw1-5OHTk-unsplash-800x450.jpg"
      title="A first Meetup"
      address="Polna 23, Warsaw"
      description="Meetup description"
    />
  );
};

export default MeetupDetails;
