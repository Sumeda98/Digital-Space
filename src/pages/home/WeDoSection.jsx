import { Grid, Typography } from "@mui/material";
import React from "react";
import WeDoCard from "../../components/card/WeDoCard";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { useTheme } from "@emotion/react";
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import AdUnitsOutlinedIcon from '@mui/icons-material/AdUnitsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

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
            icon={<DesignServicesIcon  sx={{fontSize:{xs:30,md:35}, color:theme.palette.primary.main}}/>}
            title="UI UX Design"
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
            icon={<PanToolAltOutlinedIcon  sx={{fontSize:{xs:30,md:35}, color:theme.palette.primary.main}}/>}
            title="SEO"
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
            icon={<WebAssetOutlinedIcon  sx={{fontSize:{xs:30,md:35},color:theme.palette.primary.main}}/>}
            title="Web Design"
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
            icon={<TerminalOutlinedIcon  sx={{fontSize:{xs:30,md:35},color:theme.palette.primary.main}}/>}
            title="Software Development"
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
            icon={<AdUnitsOutlinedIcon  sx={{ fontSize:{xs:30,md:35},color:theme.palette.primary.main}}/>}
            title="Mobile App Development"
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
            icon={<GroupsOutlinedIcon  sx={{ fontSize:{xs:30,md:35},color:theme.palette.primary.main}}/>}
            title="Team Augmentation"
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
