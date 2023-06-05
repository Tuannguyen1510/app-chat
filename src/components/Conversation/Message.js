import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, MsgTypes, ReplyMsg, TextMsg } from "./MsgTypes";

const Message = (menu) => {
  return (
    <Box spacing={3} p={3}>
      <Stack spacing={3}>
        {Chat_History.map((item) => {
          switch (item.type) {
            case "divider":
              return <MsgTypes item={item} />;

            case "msg":
              switch (item.subtype) {
                case "img":
                  return <MediaMsg item={item} menu={menu}/>
                case "doc":
                  return <DocMsg item={item}  menu={menu}/>
                case "link":
                 return <LinkMsg item={item}  menu={menu}/>
                case "reply":
                  return <ReplyMsg item={item}  menu={menu}/>
                default:
                  return <TextMsg item={item}  menu={menu}/>;
              }
              break;

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
