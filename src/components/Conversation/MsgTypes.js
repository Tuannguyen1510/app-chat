import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";

import React, { useState } from "react";
import { Message_options } from "../../data";
//
const TextMsg = (props) => {
  const theme = useTheme();
  const { item,menu } = props;
  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          color={item.incoming ? theme.palette.text : "#fff"}
        >
          {item.message}
        </Typography>
      </Box>
      {menu && MessageOptions() }
    </Stack>
  );
};
//
const MediaMsg = (props) => {
  const theme = useTheme();
  const { item, menu } = props;
  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={item.img}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography
            variant="body2"
            color={item.incoming ? theme.palette.text : "#fff"}
          >
            {item.message}
          </Typography>
        </Stack>
      </Box>
      {menu && MessageOptions() }
    </Stack>
  );
};
//
const ReplyMsg = (props) => {
  const theme = useTheme();
  const { item, menu } = props;
  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={"column"}
            alignItems={"center"}
            sx={{ backgroundColor: theme.palette.paper, borderRadius: 1 }}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {item.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={item.incoming ? theme.palette.text : "#fff"}
          >
            {item.reply}
          </Typography>
        </Stack>
      </Box>
      {menu && MessageOptions() }
    </Stack>
  );
};
//
const LinkMsg = (props) => {
  const theme = useTheme();
  const { item,menu } = props;
  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            // direction={"column"}
            alignItems={"center"}
            sx={{ backgroundColor: theme.palette.paper, borderRadius: 1 }}
          >
            <img
              src={item.preview}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            {/* <Typography variant="body2" color={theme.palette.text}>
              {item.message}
            </Typography> */}
            <Stack spacing={2}>
              <Typography
                variant="subtitle2"
                color={item.incoming ? theme.palette.text : "#fff"}
              >
                Creating Chat App
              </Typography>
              <Typography
                variant="subtitle2"
                color={item.incoming ? theme.palette.primary.main : "#fff"}
                component={Link}
                to="//https:www.youtube.com"
              >
                www.youtube.com
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              color={item.incoming ? theme.palette.text : "#fff"}
            >
              {item.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {menu && MessageOptions() }
    </Stack>
  );
};
//
const DocMsg = (props) => {
  const theme = useTheme();
  const { item, menu } = props;
  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            sx={{ backgroundColor: theme.palette.paper, borderRadius: 1 }}
          >
            <Image size={48} />
            <Typography variant="caption">Abstract.pgn</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            color={item.incoming ? theme.palette.text : "#fff"}
          >
            {item.message}
          </Typography>
        </Stack>
      </Box>
      {menu && MessageOptions() }
    </Stack>
  );
};
const MsgTypes = (props) => {
  const theme = useTheme();
  const { item} = props;
  console.log(item.text);
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Divider width="46%" />
      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {item.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <DotsThreeVertical size={20} />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack spacing={1} px={1} >
          {Message_options.map((item) => {
             return(
              <>
              <MenuItem onClick={handleClose}>{item.title}</MenuItem>
              </>
             )
          })}
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
         <MenuItem onClick={handleClose}>Logout</MenuItem>           */}
       
        </Stack>
      </Menu>
    </>
  );
};
export { MsgTypes, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
