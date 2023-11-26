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
        }}
      >
        <Grid container>
          <Grid item xs={1}>{props.icon}</Grid>
          <Grid item xs={10}><Typography  textAlign="center" variant="h6">
            {props.title}
          </Typography></Grid>
        </Grid>
        <Stack sx={{ mt: 2 }}>
          <Typography textAlign='justify' color="text.secondary" variant="body2">
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
