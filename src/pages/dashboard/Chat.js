// rafc
// import { Box, IconButton, Typography, Stack ,SearchIcon,InputBase} from "@mui/material";
import * as React from "react";
import { styled, alpha ,useTheme} from "@mui/material/styles";
import {
  ArchiveBox,
  Circle,
  CircleDashed,
  Divide,
  MagnifyingGlass,
} from "phosphor-react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { Avatar, Button, Divider, Stack } from "@mui/material";
import { faker } from "@faker-js/faker";
import { Badge } from "@mui/material";

import { ChatList } from "../../data/index";
import {SimpleBarStyle} from "../../components/Scrollbar"
// import { useTheme } from "@emotion/react";
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

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));
/// Active
const chatElement = () => {
  return ChatList.filter((item) => item.pinned ===true).map((el) => {
    const theme = useTheme();
    return (
      <Box
        sx={{
          width: "100%",
          // height: 60,
          borderRadius: 1,
          backgroundColor:  theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
          
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} spacing={2}>
          {el.online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={el.img} />
            </StyledBadge>
          ) : (
            <Avatar src={el.img} />
          )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{el.name}</Typography>
              <Typography variant="caption">{el.msg}</Typography>
            </Stack>
          </Stack>

          <Stack spacing={2} alignItems={"center"}>
  <Typography sx={{
    fontWeight:600,
    variant:"caption"
  }}>
    {el.time}
  </Typography>
  <Badge color="primary" badgeContent={el.unread}>

  </Badge>
          </Stack>
        </Stack>
      </Box>
    );
  })
};

// Chat All 
const chatElementAll = () => {
  return ChatList.filter((item) => !item.pinned).map((el) => {
    const theme = useTheme();
    return (
      <Box
        sx={{
          width: "100%",
          // height: 60,
          borderRadius: 1,
          backgroundColor:  theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} spacing={2}>
          {el.online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={el.img} />
            </StyledBadge>
          ) : (
            <Avatar src={el.img} />
          )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{el.name}</Typography>
              <Typography variant="caption">{el.msg}</Typography>
            </Stack>
          </Stack>

          <Stack spacing={2} alignItems={"center"}>
  <Typography sx={{
    fontWeight:600,
    variant:"caption"
  }}>
    {el.time}
  </Typography>
  <Badge color="primary" badgeContent={el.unread}>

  </Badge>
          </Stack>
        </Stack>
      </Box>
    );
  })
};



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.background.default, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Chat = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: "relative",
        // height: "100vh",
        width: 420,
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.2)",
      }}
    >
      <Stack p={3}  spacing={2} sx={{height:"100vh"}}>
        {/*  */}
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Typography variant="h5"> Chats </Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        {/*  */}
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        {/*  */}
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>

        {/*  */}
        <Stack direction={"column"} sx={{flexGrow:1, overflow:"auto", height:"100%"}}>
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              Pinned
            </Typography>
            {/* {ChatList.filter((item) => item.pinned).map((el) => {
              return chat
            })} */}
              {chatElement()}
          </Stack>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              All chats
            </Typography>
            {/* {ChatList.filter((item) => item.pinned).map((el) => {
              return chat
            })} */}
          {chatElementAll()}
          </Stack>
          </SimpleBarStyle>
        
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chat;
