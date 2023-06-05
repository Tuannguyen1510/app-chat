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
//
import dispatch from '../../redux/store'
import { ToggleSidebar } from "../../redux/slices/app";
import { useDispatch } from "react-redux";
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



const HeaderConversation = () => {
    const theme = useTheme();

    const dispatch = useDispatch();
  return (
    <div>
         <Box
          p={2}
          sx={{
            height: "10%",
            width: "100%",
            backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ width: "100%", height: "100%" }}
            
          >
            <Stack  direction={"row"} spacing={2} onClick={() => {
              dispatch(ToggleSidebar())
            }}>
              <Box>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar src={faker.image.avatar()} />
                </StyledBadge>
                <Stack spacing={0.2}>
                  <Typography variant="subtitle2">
                    {faker.name.fullName()}
                  </Typography>
                  <Typography variant="caption">Online</Typography>
                </Stack>
              </Box>
            </Stack>
            {/*  */}
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <IconButton>
                <Phone />
              </IconButton>
              <IconButton>
                <MagnifyingGlass />
              </IconButton>
              <Divider orientation="vertical" flexItem />
              <IconButton>
                <CaretDown />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
    </div>
  )
}

export default HeaderConversation
