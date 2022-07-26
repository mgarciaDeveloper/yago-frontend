import * as React from "react";
import List from "@mui/material/List";
import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Lista(props) {
  return (
    props.list.length !== 0 && (
      <List
        sx={{ width: "100%", maxWidth: "700px", bgcolor: "background.paper" }}
      >
        {props.list.map((each, index) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={each.imgsrc} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{ width: "100%" }}
                  >
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="subtitle2"
                      color="primary"
                    >
                      {each.title}
                    </Typography>
                    <IconButton
                      onClick={() => {
                        props.deletar(each.title);
                      }}
                      edge="end"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                }
                secondary={<React.Fragment>{each.review}</React.Fragment>}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    )
  );
}
