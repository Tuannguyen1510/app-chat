//
import { faker } from "@faker-js/faker";
import {
  // Image,
  Avatar,
  // Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  // Fab,
  Box,
  // Tooltip,
  // AddIcon,
  // Fab,
  // EditIcon
} from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";

import * as React from "react";
import { Badge } from "@mui/material";
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';

import {
  Image,
  Camera,
  CaretDown,
  File,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  Sticker,
  User,
  VideoCamera,
  
} from "phosphor-react";







import Header from "./Header";
import HeaderConversation from "./Header";
//
import data from "@emoji-mart/data";
import { Picker } from "emoji-mart";
// import 'emoji-mart/css/emoji-mart.css';
// import { Picker } from 'emoji-mart';

import { useState } from "react";

//
import EmojiPicker from "emoji-picker-react";

//

const custom = [
  {
    id: "github",
    name: "GitHub",
    emojis: [
      {
        id: "octocat",
        name: "Octocat",
        keywords: ["github"],
        skins: [{ src: "./octocat.png" }],
      },
      {
        id: "shipit",
        name: "Squirrel",
        keywords: ["github"],
        skins: [
          { src: "./shipit-1.png" },
          { src: "./shipit-2.png" },
          { src: "./shipit-3.png" },
          { src: "./shipit-4.png" },
          { src: "./shipit-5.png" },
          { src: "./shipit-6.png" },
        ],
      },
    ],
  },
  {
    id: "gifs",
    name: "GIFs",
    emojis: [
      {
        id: "party_parrot",
        name: "Party Parrot",
        keywords: ["dance", "dancing"],
        skins: [{ src: "./party_parrot.gif" }],
      },
    ],
  },
];

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

const ActionTitel = [
  {
    color: "#4da5fe",
    icon: <Image size={24} color="#fff"/>,
    y: 102,
    titel: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} color="#fff"/>,
    y: 172,
    titel: "Sticker",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} color="#fff"/>,
    y: 242,
    titel: "Photo/Video",
  },
  {
    color: "#4da5fe",
    icon: <File size={24} color="#fff"/>,
    y: 312,
    titel: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} color="#fff"/>,
    y: 382,
    titel: "Contact",
  },
];




const FooterConversation = () => {
  const theme = useTheme();
  const [isPickerVisible, setPickerVisible] = useState(false);

  const [isOpenAction, setOpenActions] = useState(false);
  console.log("Set statet", isPickerVisible);
  // const {currentEmoji, setCurrentEmoji} = useState(null);


  const renderAction = () => {
    return ActionTitel.map((item,index) => {
      return(
        <Tooltip title={item.titel} placement="right">
        <Fab sx={{
           position:"absolute",
           top:-item.y,
           backgroundColor:item.color
        }}>
        <>
        <div key={index}>
        {item.icon}
        </div>
        </>
      </Fab>
        </Tooltip>
        
      )
    })
  }


  const chatInput = () => {
    return (
      <StyleInput
        fullWidth
        placeholder="Write a message..."
        variant="filled"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <Stack
              sx={{
                width: "max-content",
              }}
            >
              <Stack sx={{ position: "relative", display: isOpenAction ? "inline" : "none"}}>
                {renderAction()}
                {/* {ActionTitel.map((item) => {
                  return (
                    <>
                    {item.titel}
                    </>
                  )
                })} */}
              </Stack>
              <InputAdornment>
                <IconButton>
                  <LinkSimple onClick={() => {
                    setOpenActions(!isOpenAction);
                  }}/>
                </IconButton>
              </InputAdornment>
            </Stack>
          ),
          endAdornment: (
            <InputAdornment>
              <IconButton
                onClick={() => {
                  setPickerVisible(!isPickerVisible);
                }}
              >
                <Smiley />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  };
  return (
    <div>
      <Box
        p={3}
        sx={{
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
          height: "10%",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <Stack sx={{ width: "100%" }}>
            <Box
              sx={{
                display: isPickerVisible ? "inline" : "none",
                zIndex: 10,
                position: "fixed",
                bottom: 81,
                right: 100,
              }}
            >
              <EmojiPicker
                onEmojiClick={(e) => {
                  setPickerVisible(!isPickerVisible);
                }}
              />
            </Box>
            {chatInput()}

            {/* <StyleInput
              fullWidth
              placeholder="Write a message..."
              variant="filled"
              setOpenPicker
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <LinkSimple />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Smiley />
                    </IconButton>
                  </InputAdornment>
                ),
              }}

            /> */}
          </Stack>
          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{ height: "100%", width: "100%" }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <IconButton>
                <PaperPlaneTilt color="#fff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default FooterConversation;
