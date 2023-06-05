import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  InputBase,
  Slide,
  Stack,
} from "@mui/material";

import { MagnifyingGlass } from "phosphor-react";
import { CallElement } from "../../components/CallElement";
import { CallList, CallLogs } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllUsers } from "../../redux/slices/app";
import {faker} from "@faker-js/faker";
import { alpha, styled, useTheme } from "@mui/material/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




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
const StartCall = ({ open, handleClose }) => {
    // const {all_users} = useSelector((state) => state.app);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(FetchAllUsers());
    // }, []);
  
    // console.log(CallList, all_users, "Call List Info");
  
    // const list = all_users.map((el) => ({
    //   id: el?._id,
    //   name: `${el?.firstName} ${el?.lastName}`,
    //   image: faker.image.avatar(),
    // }));
  
  return (
    <Dialog
    fullWidth
    maxWidth="xs"
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
    sx={{ p: 4 }}
  >
    <DialogTitle>{"Start New Conversation"}</DialogTitle>
    <Stack p={1} sx={{ width: "100%" }}>
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
    <DialogContent>
      <Stack sx={{ height: "100%" }}>
        <Stack spacing={2.4}>
          {CallLogs.map((el, idx) => {
            return <CallElement key={idx} {...el} handleClose={handleClose} />;
          })}
        </Stack>
      </Stack>
    </DialogContent>
  </Dialog>
  )
}

export default StartCall
