import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { SelectChangeEvent } from '@mui/material'
import UniversalSelectBox from '../../components/UniversalSelectBox'
import ComparativeMetricsChart from '../../charts/ComparativeMetricsChart'
import BusinessIcon from '@mui/icons-material/Business'
import AssessmentIcon from '@mui/icons-material/Assessment'

const ComparativeCompanyAnalysis: React.FC = () => {
  // Current hardcoded company
  const currentCompany = 'Adv Metrics'

  // List of available companies
  const allCompanies = ['QuantX', 'smeGO', 'Meltwater']
  const otherCompanies = allCompanies.filter(
    company => company !== currentCompany
  )

  const [selectedCompany, setSelectedCompany] = useState<string>(
    otherCompanies[0]
  )
  const [selectedMetric, setSelectedMetric] = useState<
    'Share of Voice' | 'Customer Reach' | 'Engagement Rate'
  >('Share of Voice')

  const handleCompanyChange = (event: SelectChangeEvent<string>) => {
    setSelectedCompany(event.target.value)
  }

  const handleMetricChange = (event: SelectChangeEvent<string>) => {
    setSelectedMetric(
      event.target.value as
        | 'Share of Voice'
        | 'Customer Reach'
        | 'Engagement Rate'
    )
  }

  return (
    <Box>
      {/* Header Section */}
      <Box display='flex' mb={2}>
        <Typography ml={2} flex={1} variant='h4' fontWeight='bold'>
          Comparative Company Analysis
        </Typography>
        {/* <Box mr={5}>
          <UniversalSelectBox
            label={selectedCompany}
            options={otherCompanies} // Exclude the current company
            selectedValue={selectedCompany}
            onChange={handleCompanyChange}
            IconComponent={<BusinessIcon />}
          />
        </Box> */}
        <Box mr={5}>
          <UniversalSelectBox
            label={selectedMetric}
            options={['Share of Voice', 'Customer Reach', 'Engagement Rate']}
            selectedValue={selectedMetric}
            onChange={handleMetricChange}
            IconComponent={<AssessmentIcon />}
          />
        </Box>
      </Box>

      {/* Chart Section */}
      <Box height='100%'>
        <ComparativeMetricsChart selectedMetric={selectedMetric} />
      </Box>
    </Box>
  )
}

export default ComparativeCompanyAnalysis
