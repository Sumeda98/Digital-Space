import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTheme } from "@emotion/react";

const QaAccordion = () => {
  const theme = useTheme();

  return (
    <div>
      <Accordion
      elevation={0}
        sx={{
          padding: "16px",
          borderRadius: "20px",
          border: "2px solid",
          borderColor: theme.palette.mode === "dark" ? "#2b2b2b" : "#dbdbdb",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <CheckCircleIcon
            sx={{ color: theme.palette.primary.main, mr: 2, mt: "4px" }}
          />
          <Typography variant="h6" sx={{ fontSize: "18px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default QaAccordion;
