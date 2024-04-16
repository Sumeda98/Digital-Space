import { useTheme } from "@emotion/react";
import {
  Avatar,
  Card,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Avatar1 from "../../assets/images/Avatar1.svg";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const TestimonialCard = (props) => {
  const theme = useTheme();
  return (
    <div>
      <Card
        elevation={0}
        sx={{
          p: 3,
          border:'0px',
          borderRadius: "20px",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Grid container >
          <Grid item xs={3}>
           
              
              {props.avatar}
           
          </Grid>
          <Grid item xs={9}>
            <Typography color="text.white" textAlign="left" variant="h6">
              
              {props.name}
            </Typography>

            <Stack direction="row" spacing={1}>
              <AccessTimeIcon  sx={{fontSize:20, color:theme.palette.secondary.main}}/>
              <Typography sx={{color:theme.palette.secondary.main}} textAlign="left" variant="body2">
                
                {props.time}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack sx={{ mt: 2 }}>
          <Typography textAlign="justify" color="text.white" variant="body2">
            
            {props.description}
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ mt: 2 }}>
          <StarIcon sx={{ color: "white" }} />
          <StarIcon sx={{ color: "white" }} />
          <StarIcon sx={{ color: "white" }} />
          <StarIcon sx={{ color: "white" }} />
          <StarIcon sx={{ color: "white" }} />
        </Stack>
      </Card>
    </div>
  );
};

export default TestimonialCard;
