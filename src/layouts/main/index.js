import React from "react";
import { Navigate,Outlet } from "react-router-dom";
import { Container, Stack } from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
const MainLayout = () => {

const isAuthenticalted = true;   /// đăng nhâp mới đc vào chat 

/// đăng nhâp mới đc vào chat 
if(isAuthenticalted ){
  return<Navigate to="/app"/>
}



  return (
    <>
      <Container
        sx={{
          mt: 5,
        }}
        maxWidth="sm"
      >
        <Stack spacing={5}>
          <Stack
            sx={{
              width: "100%",
            }}
            direction={"column"}
            alignItems={"center"}
          >
            <img
              style={{
                height: 120,
                width: 120,
              }}
              src={Logo}
            />{" "}
          </Stack>{" "}
        </Stack>

        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
