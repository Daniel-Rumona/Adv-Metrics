import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import UniversalSelectBox from "../../components/UniversalSelectBox";
import AudienceBarChart from "../../charts/AudienceBarChart";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

const AudienceAnalysis: React.FC = () => {
    // Define the available metrics as a union type
    type Metric = "New Users" | "Demographics" | "Engagement by Demographics";

    const [selectedMetric, setSelectedMetric] = useState<Metric>("New Users");

    const handleMetricChange = (event: SelectChangeEvent<string>) => {
        setSelectedMetric(event.target.value as Metric); // Cast to Metric type
    };

    return (
        <Box>
            {/* Header Section */}
            <Box display="flex" mb={2}>
                <Typography ml={2} flex={1} variant="h4" fontWeight="bold">
                    Audience Analysis
                </Typography>
                <Box mr={5}>
                    <UniversalSelectBox
                        label={selectedMetric}
                        options={["New Users", "Demographics", "Engagement by Demographics"]}
                        selectedValue={selectedMetric}
                        onChange={handleMetricChange}
                        IconComponent={<PeopleOutlinedIcon />} // Section-specific icon
                    />
                </Box>
            </Box>

            {/* Chart Section */}
            <Box height="500px">
                <AudienceBarChart selectedMetric={selectedMetric} />
            </Box>
        </Box>
    );
};

export default AudienceAnalysis;
