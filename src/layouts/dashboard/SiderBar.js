import React,{useState} from 'react'
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data";
//
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import useSettings from "../../hooks/useSettings";
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Stack, Switch } from '@mui/material';
import { Gear } from 'phosphor-react';
import { faker } from '@faker-js/faker';


import { useNavigate } from 'react-router-dom';


const getPath = (index) => {
  switch (index){
    case 0:
        return '/app'
    case 1:
      return "/group"
    case 2: 
      return "/call"
    case 3: 
    return "/settings"
default:
  break;


  }
}

const getMenuPath = (index) => {
  switch (index){
    case 0:
      return "/profile";
      case 1: 
       return "/settings"
       case 2: 
       // isAuth = false
       return "/auth/login"
      default:
        break;
  }
}


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
const SiderBar = () => {
    const theme = useTheme();

const navigate = useNavigate();


    const [selected, setSelected] = useState(0);
    console.log(theme);
  
    const { onToggleMode } = useSettings();


    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // alert(event.currentTarget);
    // navigate();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
        <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack
          spacing={3}
          direction="column"
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ height: "100%" }}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt={"Chat App logo"} />
            </Box>
            <Stack
              spacing={3}
              sx={{ width: "max-content" }}
              direction={"column"}
              alignItems={"center"}
            >
              {Nav_Buttons.map((item, index) =>
                item.index === selected ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      sx={{ width: "max-content", color: "#fff" }}
                      key={index}
                    >
                      {" "}
                      {item.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      setSelected(item.index);
                      navigate(getPath(item.index))
                    }}
                    sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}
                    key={index}
                  >
                    {" "}
                    {item.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: "48px" }} />

              {selected === 3 ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    navigate(getPath(3))
                    setSelected(3);
                  }}
                  sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary}}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>

          <Stack spacing={4}>
            {/* Switch */}
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
              // label="MUI switch"
              onChange={() => {
                onToggleMode();
              }}
            />

            <Avatar id="basic-button" 
             aria-controls={open ? "basic-menu" : undefined}
             aria-haspopup="true"
             aria-expanded={open ? "true" : undefined}
             onClick={handleClick}
             src={faker.image.avatar()} />

            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <Stack spacing={1} px={1} >
          {Profile_Menu.map((item, index) => {
             return(
              <>
              <MenuItem onClick={ () => {
handleClick();
              }}>
                <Stack onClick={() => {
navigate(getMenuPath(index));

                }} sx={{width:100}} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                  <span>
                {item.title}
                  </span>
                  {item.icon}
                </Stack>
            </MenuItem>
              </>
             )
          })}
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
         <MenuItem onClick={handleClose}>Logout</MenuItem>           */}
       
        </Stack>
      </Menu>


          </Stack>
        </Stack>
      </Box>
    </div>
  )
}

export default SiderBar
