import {
    Box,
    Divider,
    IconButton,
    Stack,
    Typography,
    Link,
    InputBase,
  } from "@mui/material";
  import { MagnifyingGlass, Phone } from "phosphor-react";
  import React, { useEffect, useState } from "react";
  import { alpha, styled, useTheme } from "@mui/material/styles";
//   import { useTheme } from "@mui/material/styles";
  import { SimpleBarStyle } from "../../components/Scrollbar";
//   import { CallLogElement } from "../../components/CallElement";
//   import StartCall from "../../sections/dashboard/StartCall";
  import { useDispatch, useSelector } from "react-redux";
  import { FetchCallLogs } from "../../redux/slices/app";
import { CallLogs } from "../../data";
import { CallLogElement } from "../../components/CallElement";
import StartCall from "../../sections/main/StartCall";

  
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




const Call = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(FetchCallLogs());
    // }, []);
    // const { call_logs } = useSelector((state) => state.app);
    const [openDialog, setOpenDialog] = useState(false);
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };
    const handleOpenDialog = () => {
      setOpenDialog(true);
    };
    const theme = useTheme();
  return (
    <>
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* Left */}

      <Box
        sx={{
          overflowY: "scroll",

          height: "100vh",
          width: 340,
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
            <Typography variant="h5">Call Log</Typography>
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
              Start a conversation
            </Typography>
            <IconButton onClick={handleOpenDialog}>
              <Phone style={{ color: theme.palette.primary.main }} />
            </IconButton>
          </Stack>
          <Divider />
          <Stack sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                {CallLogs.map((el, idx) => {
                  return <CallLogElement key={idx} {...el} />;
                })}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
    </Stack>
    {openDialog && (
      <StartCall open={openDialog} handleClose={handleCloseDialog} />
    )}
  </>
  )
}

export default Call
