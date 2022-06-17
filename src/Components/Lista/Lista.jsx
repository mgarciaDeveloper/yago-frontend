import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function Lista(props) {
  
  return (
   props.list.length !== 0 ?
   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.list.map((eo,i)=>{
      return  <>   
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="" src={eo.imgsrc}/>
        </ListItemAvatar>
        <ListItemText
          primary={<Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ width: "100%" }}
          >
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="subtitle2"
              color="text.primary"
            >
              {eo.title}
            </Typography>
          </React.Fragment>
          <IconButton onClick={()=>{
           props.delete(eo,i)

          }}
                    edge="end"
                    aria-label="delete"
                  >
                    <DeleteIcon />
          </IconButton>
          
          </Stack>
          }
          
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {eo.review}
              </Typography>
            </React.Fragment>
            
          }
        />
        
      </ListItem>
      <Divider variant="inset" component="li" />
       </> })}
    </List>
    :<div></div>
  
  );
}
