// import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
  return (
    <>
      <EventForm method="POST" />
      {/* <h1>New Event Page</h1> */}
    </>
  );
}

export default NewEventPage;
