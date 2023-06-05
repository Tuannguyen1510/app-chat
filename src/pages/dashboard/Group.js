import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Link,
  Divider,
  InputBase,
} from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import CreateGroup from "../../sections/main/CreateGroup";
// import ChatElement from "../../components/ChatElement";
// import {
//   Search,
//   SearchIconWrapper,
//   StyledInputBase,
// } from "../../components/Search";
// import CreateGroup from "../../sections/dashboard/CreateGroup";





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
const Group = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () => {
      setOpenDialog(false);
    }
    const handleOpenDialog = () => {
      setOpenDialog(true);
    }
    const theme = useTheme();
  return (
    <>
        <Stack direction="row" sx={{ width: "100%" }}>
    {/* Left */}

    <Box
      sx={{
        overflowY: "auto",
        height: "100vh",
        width: 320,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background,

        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
        <Stack
          alignItems={"center"}
          justifyContent="space-between"
          direction="row"
        >
          <Typography variant="h5">Groups</Typography>
        </Stack>
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
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"row"}
        >
          <Typography variant="subtitle2" sx={{}} component={Link}>
            Create New Group
          </Typography>
          <IconButton onClick={handleOpenDialog}>
            <Plus style={{ color: theme.palette.primary.main }} />
          </IconButton>
        </Stack>
        <Divider />
        <Stack sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                Pinned
              </Typography>
              {/* Chat List */}
              {ChatList.filter((el) => el.pinned).map((el, idx) => {
                return <ChatElement {...el} />;
              })}
              <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                All Chats
              </Typography>
              {/* Chat List */}
              {ChatList.filter((el) => !el.pinned).map((el, idx) => {
                return <ChatElement {...el} />;
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>

    {/* Right */}
  </Stack>
  {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog} />}
    </>
  )
}

export default Group
