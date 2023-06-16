import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  // const data = useLoaderData();
  const data = useRouteLoaderData("event-detail");
  console.log("Edit event page", data);
  return (
    <>
      <EventForm method="PATCH" event={data.event} />
      {/* <h1>Edit Event Page</h1> */}
    </>
  );
}

export default EditEventPage;
