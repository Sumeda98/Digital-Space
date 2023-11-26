import { Grid, Typography } from "@mui/material";
import React from "react";
import WeDoCard from "../../components/card/WeDoCard";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { useTheme } from "@emotion/react";

const WeDoSection = () => {
  const theme = useTheme();
  return (
    <div style={{ marginTop: "40px" }}>
      <Typography textAlign="center" variant="h4" sx={{ fontWeight: 600 }}>
        What We Do
      </Typography>
      <Grid rowSpacing={2} columnSpacing={2} container xs={12} sx={{ mt: 6 }}>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <WeDoCard
            icon={<DesignServicesIcon  sx={{display:'flex', alignItems:'end', color:theme.palette.primary.main}}/>}
            title="Title"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            dicta at architecto distinctio sed impedit esse, illo cupiditate
            odio inventore maiores accusantium, aperiam corporis error doloribus
            numquam? Accusamus, et iure."
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <WeDoCard
            icon={<DesignServicesIcon  sx={{display:'flex', alignItems:'end', color:theme.palette.primary.main}}/>}
            title="Title"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            dicta at architecto distinctio sed impedit esse, illo cupiditate
            odio inventore maiores accusantium, aperiam corporis error doloribus
            numquam? Accusamus, et iure."
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
        <WeDoCard
            icon={<DesignServicesIcon  sx={{display:'flex', alignItems:'end', color:theme.palette.primary.main}}/>}
            title="Title"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            dicta at architecto distinctio sed impedit esse, illo cupiditate
            odio inventore maiores accusantium, aperiam corporis error doloribus
            numquam? Accusamus, et iure."
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <WeDoCard
            icon={<DesignServicesIcon  sx={{display:'flex', alignItems:'end', color:theme.palette.primary.main}}/>}
            title="Title"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            dicta at architecto distinctio sed impedit esse, illo cupiditate
            odio inventore maiores accusantium, aperiam corporis error doloribus
            numquam? Accusamus, et iure."
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
         <WeDoCard
            icon={<DesignServicesIcon  sx={{display:'flex', alignItems:'end', color:theme.palette.primary.main}}/>}
            title="Title"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            dicta at architecto distinctio sed impedit esse, illo cupiditate
            odio inventore maiores accusantium, aperiam corporis error doloribus
            numquam? Accusamus, et iure."
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <WeDoCard
            icon={<DesignServicesIcon  sx={{display:'flex', alignItems:'end', color:theme.palette.primary.main}}/>}
            title="Title"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            dicta at architecto distinctio sed impedit esse, illo cupiditate
            odio inventore maiores accusantium, aperiam corporis error doloribus
            numquam? Accusamus, et iure."
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default WeDoSection;
