import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EventRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventRootLayout;
