import { useTheme } from "@emotion/react";
import CalendarPage from "~/scenes/calendar";
import { tokens } from "~/theme";

function Calendar() {
    const theme = useTheme();
    return ( 
        <div className="wrapper">
            <CalendarPage />
        </div>
     );
}

export default Calendar;