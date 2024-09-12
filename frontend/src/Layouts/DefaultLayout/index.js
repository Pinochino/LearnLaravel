import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Topbar from "~/scenes/global/Topbar/Topbar";
import { Box } from "@mui/material";
import SideBar from "~/scenes/global/Sidebar/Sidebar";
import { useStateContext } from "~/contexts/ContextProvider";
import { Link, Navigate } from "react-router-dom";


const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const { token } = useStateContext();

  // Redirect to login if token is not present
  if (!token) {
    return <Navigate to="/login" />;
  }


  return (
    <Box className={cx("wrapper")}>
      <Box display="flex"  >
        <Box
        >
          <SideBar />
        </Box>
        <Box flex="1">
          <Topbar />
          {children}
        </Box>
      </Box>
    </Box>

  );
}

export default DefaultLayout;
