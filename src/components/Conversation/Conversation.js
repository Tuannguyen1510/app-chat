//
import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";

import React from "react";
import { Badge } from "@mui/material";
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";
import Header from "./Header";
import HeaderConversation from "./Header";
import FooterConversation from "./FooterConversation";
import Message from "./Message";
//
const StyleInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !import",
    paddingBottom: "12px !import",
  },
}));
//
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const Conversation = () => {
  const theme = useTheme();
  return (
    <div>
      <Stack
        height={"100%"}
        maxHeight={"100vh"}
        width={"auto"}
        // direction={"column"}
      >
        {/* Chat Header */}
        <HeaderConversation />
        {/* MSG  */}
        <Box width={"100%"} sx={{ flexGrow: 1, height:"100%", overflowY:"scroll" }} >
            <Message menu={true}/>
        </Box>
        {/* Chat Footter  */}
        <FooterConversation />
      </Stack>
    </div>
  );
};

export default Conversation;
