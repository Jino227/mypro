
import { Avatar, AvatarGroup, Box, Divider, ImageList,List, ImageListItem,ListItemAvatar, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
const Rightbar =()=>{
    return(
       
              <Box  flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
           <Box position="fixed" width={300}>
            <Typography varient="h6" width="100">Online friends</Typography>
            <AvatarGroup max={4}>
  <Avatar alt="Remy Sharp" src="./assests/down1.jpg" />
  <Avatar alt="Travis Howard" src="./assests/download.png" />
  <Avatar alt="Cindy Baker" src="./assests/icn 1.jpg" />
  <Avatar alt="Agnes Walker" src="./assests/icn 2.png" />
  <Avatar alt="Trevor Henderson" src="./assests/icn 4.jpg" />
</AvatarGroup>
<Typography varient="h6" width="100" mt={2} mb={2}>Latest Images</Typography>
<ImageList cols={3} rowHeight={100} gap={5}>
    <ImageListItem>
        <img src="./assests/food1.jpg" alt=""></img>
    </ImageListItem>
    <ImageListItem>
        <img src="./assests/food2.jpg" alt=""></img>
    </ImageListItem>
    <ImageListItem>
        <img src="./assests/food3.jpg" alt=""></img>
    </ImageListItem>
</ImageList>
<Typography varient="h6" width="100" mt={2} >Latest Conversations</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

           </Box>
        </Box>

        
    )
}
export default Rightbar;