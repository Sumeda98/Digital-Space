import { useTheme } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CallIcon from '@mui/icons-material/Call';

const ProjectSection = () => {
  const theme = useTheme();
  return (
    <div style={{ marginTop: "60px" }}>
      <div
        style={{
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "10px",
          padding: "40px",
        }}
      >
        <Stack direction='column' spacing={2} >
        <Typography textAlign='center' variant="h4" sx={{fontWeight:600,color:'#19191A'}}>Let s talk Your Project</Typography>
        <Typography sx={{color:'#19191A'}} variant="body1" textAlign='center'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Typography>
        <div style={{display:'flex', justifyContent:'center'}}>
        <Button
                sx={{ mt: 4, textTransform: "capitalize", p: 1, px: 2 , }}
                variant="contained"
                color="primary"
                endIcon={<CallIcon />}
              >
                Schedule a Meeting

              </Button>
              </div>
        </Stack>
        
      </div>
    </div>
  );
};

export default ProjectSection;
