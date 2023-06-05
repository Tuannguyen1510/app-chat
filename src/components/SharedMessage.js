import {
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";
import { CaretLeft, X } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINK } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SharedMessage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  //
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            alignItems={"center"}
            // justifyContent={"space-between"}
            spacing={1}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Message </Typography>
          </Stack>
        </Box>
        {/*  */}
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Media" />
            <Tab label="Links" />
            <Tab label="Docs" />
          </Tabs>
        </Box>
        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={value === 1 ? 1 : 3 }
        >
          {(() => {
            switch (value) {
              case 0:
                // Images
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6].map((item) => {
                     return <Grid item xs={4}>
                        <img src={faker.image.avatar()} />
                      </Grid>;
                    })}
                  </Grid>
                );

              case 1:
                // Link
                return SHARED_LINK.map((item) => 
                (<LinkMsg item={item}/>)
                )
             

              case 2:
                //Docs
                return SHARED_DOCS.map((item) => 
                (<DocMsg item={item}/>)
                )

              default:
                break;
            }
          })()}
        </Stack>
        {/*  */}
      </Stack>
    </Box>
  );
};

export default SharedMessage;
