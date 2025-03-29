import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { SelectChangeEvent } from "@mui/material"; // Import SelectChangeEvent
import UniversalSelectBox from "../../components/UniversalSelectBox";
import GeographicalViewChart from "../../charts/GeographicalView";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined"; // Section-specific icon

const GeographicalView: React.FC = () => {
    const [selectedMetric, setSelectedMetric] = useState("New Users");

    const handleMetricChange = (event: SelectChangeEvent<string>) => {
        setSelectedMetric(event.target.value);
    };

    return (
        <Box>
            <Box display="flex" mb={2}>
                <Typography ml={2} flex={1} variant="h4" fontWeight="bold">
                    Geographical Analysis
                </Typography>
                <Box mr={5}>
                    <UniversalSelectBox
                        label={selectedMetric}
                        options={["World View", "Continental", "Country"]}
                        selectedValue={selectedMetric}
                        onChange={handleMetricChange}
                        IconComponent={<PublicOutlinedIcon />} // Section-specific icon
                    /></Box>
            </Box>
            <Box height="500px">
                <GeographicalViewChart />
            </Box>
        </Box>
    );
};

export default GeographicalView;
