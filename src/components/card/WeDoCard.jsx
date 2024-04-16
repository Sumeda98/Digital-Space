import { useTheme } from "@emotion/react";
import { Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LearnMoreBtn from "../button/LearnMoreBtn";


const WeDoCard = (props) => {
  const theme = useTheme();
  return (
    <div>
      <Card
        elevation={0}
        sx={{
          p: 3,
          borderRadius: "20px",
          border: "1px solid",
          borderColor: theme.palette.mode === "dark" ? "#2b2b2b" : "#dbdbdb",
          boxShadow: theme.palette.mode === "dark" ? 
          
          '0 1px 1px 0 rgb(54, 54, 54), 0 -1px 1px 0 rgba(226,232,237,.04)'
          :
          '0 8px 13px 0 rgba(226,227,237,.73), 0 -2px 7px 0 rgba(226,232,237,.04)'
        }}
      >
        <Grid container>
          <Grid item xs={1}>{props.icon}</Grid>
          <Grid item xs={10}><Typography  textAlign="center" variant="h6">
            {props.title}
          </Typography></Grid>
        </Grid>
        <Stack sx={{ mt: 2 }}>
          <Typography textAlign='justify' color="text.primary" variant="body1">
            {props.description}
          </Typography>
        </Stack>
        <Stack sx={{ mt: 2 }}>
          <LearnMoreBtn />
        </Stack>
      </Card>
    </div>
  );
};

export default WeDoCard;
