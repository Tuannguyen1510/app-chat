import React, { Suspense, lazy } from "react";
import Chat from "./Chat";
import { Box, Stack, Typography } from "@mui/material";
import Conversation from "../../components/Conversation/Conversation";
import { useTheme } from "@mui/material/styles";
//import Cat from "../../components/Cat";
import ContactSettings from "../../components/ContactSettings";
import { useSelector } from "react-redux";
import SharedMessage from "../../components/SharedMessage";
import StarredMessages from "../../components/StarredMessages";
// Dynamic
const Cat = lazy(() => import("../../components/Cat"));
const GeneralApp = () => {
  const theme = useTheme();
  const app = useSelector(state => state.app);

  // console.log("app ne", app);
  const { sideBarClick } = useSelector(state => state.app);
  console.log("app", sideBarClick.type);
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chat />
      <Box
        sx={{
          height: "100%",
          width: sideBarClick.openClick ? "50%" : "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
        }}
      >
        {/* badgeContent */}
        <Conversation />
      </Box>
      {sideBarClick.openClick &&
        (() => {
          switch (sideBarClick.type) {
            case "CONTACT":
              return <ContactSettings />;
            case "STARRED":
              return <StarredMessages/>
            case "SHARED":
              return <SharedMessage />;
            default:
              return <SharedMessage/>
          }
        }) () }
         {/* {sideBarClick.openClick && <ContactSettings />} */}
    </Stack>
  );
};

export default GeneralApp;
