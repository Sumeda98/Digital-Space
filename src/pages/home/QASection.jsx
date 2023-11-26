import React from 'react'
import QaAccordion from '../../components/Accordion/QaAccordion'
import { Stack, Typography } from '@mui/material'

const QASection = () => {
  return (
    <div style={{ marginTop: "60px" , marginBottom:'40px'}}>
      <Typography textAlign='center' variant="h4" sx={{fontWeight:600,mb:4}}>Frequently Asked Questions</Typography>
      <Stack spacing={2}>
      <QaAccordion/>
      <QaAccordion/>
      <QaAccordion/>
      <QaAccordion/>
      <QaAccordion/>
      </Stack>
      
      
    </div>
  )
}

export default QASection