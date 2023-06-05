import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
  useThemeProps,
} from "@mui/material";
import React, { useState } from "react";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSidebar, updateSideBarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({open, handleClose}) => {
  return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>Block this chat</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
      Are you sure you want to block this chat?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose}>Yes</Button>
    </DialogActions>
  </Dialog>
  )
}

const DeletedDialog = ({open, handleClose}) => {
  return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>Deleted this chat</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Are you sure you want to deleted this chat?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose}>Yes</Button>
    </DialogActions>
  </Dialog>
  )
}

const ContactSettings = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [openBlock, setOpenBlock] = useState(false);
  const [openDete, setOpenDete] = useState(false);

  const handleCloseOpenBlock = () => {
    setOpenBlock(false);
  };

  const handleCloseOpenDeleted = () => {
    setOpenDete(false);
  };


  return (
    <Box
      sx={{
        width: 320,
        height: "100%",
      }}
    >
      <Stack
        sx={{
          height: "100%",
        }}
      >
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.default,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 1 }}
            direction={"row"}
            alignContent={"center"}
            justifyContent={"space-between"}
            spacing={1}
          >
            <Typography variant="subtitle2">Contact Info </Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            // overflowY: "scroll",
            overflow: "hidden",
          }}
          p={2}
          spacing={1.5}
        >
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar src={faker.image.avatar()} sx={{ height: 64, width: 64 }} />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="article" fontWeight={600}>
                {"+0000 000 000"}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>

            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">
              Imagiantion is the only limit
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={0.5}
          >
            <Typography>Media, Links & Docs</Typography>

            <Button endIcon={<CaretRight />} onClick={() => {
              dispatch(updateSideBarType("SHARED"))
            }}>401</Button>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            {[1, 2, 3].map((item) => (
              <Box>
                <img src={faker.image.food()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Star size={21} />
              <Typography>Started Messages</Typography>
            </Stack>
            <IconButton >
              <CaretRight onClick={() => {
              dispatch(updateSideBarType("STARRED"))
            }}/>
            </IconButton>
          </Stack>

          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Bell size={21} />
              <Typography>Mute Notification</Typography>
            </Stack>
            <IconButton>
              <AntSwitch />
            </IconButton>
          </Stack>
          <Divider />
          <Typography>1 grounp in common</Typography>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Avatar src={faker.image.avatar()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">Coding Monk</Typography>
              <Typography variant="subtitle2">Hary, Mink,....</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Button startIcon={<Prohibit />} fullWidth variant="outlined" onClick={() => {
              setOpenBlock(true);
            }}>
              Block
            </Button>
            <Button startIcon={<Trash />} fullWidth variant="outlined"  onClick={() => {
              setOpenDete(true);
            }}>
              Deleted
            </Button>
          </Stack>


        </Stack>
      </Stack>
      {openBlock && <BlockDialog open={openBlock} handleClose={handleCloseOpenBlock}/>}
      {openDete && <DeletedDialog open={openDete} handleClose={handleCloseOpenDeleted}/>}
    </Box>
  );
};

export default ContactSettings;
