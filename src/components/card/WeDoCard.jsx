import { useTheme } from "@emotion/react";
import { Card, Stack, Typography } from "@mui/material";
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
        <Stack >
          {props.icon}
          <Typography textAlign="center" variant="h6">
            {props.title}
          </Typography>
        </Stack>
        <Stack sx={{ mt: 2 }}>
          <Typography color="text.secondary" variant="body2">
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
