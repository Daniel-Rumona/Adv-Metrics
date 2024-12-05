import React, { useState } from "react";
import { Box, ButtonGroup, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { SelectChangeEvent } from "@mui/material";
import UniversalSelectBox from "../../components/UniversalSelectBox";
import TrendingLineChart from "../../charts/TrendingLineChart";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import mockData from "../../data/mockData";

const TrendingTopics: React.FC = () => {
  type Topic = "All" | "AI" | "Machine Learning" | "Blockchain";
  type DataPoint = { topic: string; date: string; value: number };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedTopic, setSelectedTopic] = useState<Topic>("All");
  const [timeframe, setTimeframe] = useState<"Daily" | "Weekly" | "Monthly">("Daily");

  const handleTopicChange = (event: SelectChangeEvent<string>) => {
    setSelectedTopic(event.target.value as Topic);
  };

  const handleTimeframeChange = (newTimeframe: "Daily" | "Weekly" | "Monthly") => {
    setTimeframe(newTimeframe);
  };

  const filteredData = () => {
    const allData = mockData.trendingTopics.popularityTrend;

    if (selectedTopic === "All") {
      // Combine all topics into separate lines
      return allData.map((topic) => {
        const topicData = topic.dataPoints;

        const aggregatedData =
          timeframe === "Daily"
            ? topicData.slice(-15).map((point) => ({ x: point.date, y: point.value }))
            : timeframe === "Weekly"
            ? topicData
                .slice(-140)
                .reduce((weeks: any[], point, index) => {
                  const week = Math.floor(index / 7);
                  if (!weeks[week]) weeks[week] = { x: `Week ${week + 1}`, y: 0 };
                  weeks[week].y += point.value;
                  return weeks;
                }, [])
            : topicData
                .slice(-365)
                .reduce((months: any[], point, index) => {
                  const month = Math.floor(index / 30);
                  if (!months[month]) months[month] = { x: `Month ${month + 1}`, y: 0 };
                  months[month].y += point.value;
                  return months;
                }, []);

        return { id: topic.topic, data: aggregatedData };
      });
    } else {
      // Filter for the selected topic
      const topicData = allData.find((topic) => topic.topic === selectedTopic)?.dataPoints || [];

      const aggregatedData =
        timeframe === "Daily"
          ? topicData.slice(-15).map((point) => ({ x: point.date, y: point.value }))
          : timeframe === "Weekly"
          ? topicData
              .slice(-140)
              .reduce((weeks: any[], point, index) => {
                const week = Math.floor(index / 7);
                if (!weeks[week]) weeks[week] = { x: `Week ${week + 1}`, y: 0 };
                weeks[week].y += point.value;
                return weeks;
              }, [])
          : topicData
              .slice(-365)
              .reduce((months: any[], point, index) => {
                const month = Math.floor(index / 30);
                if (!months[month]) months[month] = { x: `Month ${month + 1}`, y: 0 };
                months[month].y += point.value;
                return months;
              }, []);

      return [{ id: selectedTopic, data: aggregatedData }];
    }
  };

  return (
    <Box>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        {/* Left: Heading */}
        <Typography ml={2} variant="h4" fontWeight="bold">
          Trending Topics
        </Typography>

        {/* Center: Button Group */}
        <Box mx={2}>
          <ButtonGroup
            sx={{
              "& .MuiButton-root": {
                color: colors.primary[100],
                backgroundColor: colors.primary[700],
                border: `1px solid ${colors.primary[600]}`,
                "&:hover": {
                  backgroundColor: colors.blueAccent[600],
                },
              },
              "& .MuiButton-contained": {
                backgroundColor: colors.primary[400],
                color: colors.primary[200],
                "&:hover": {
                  backgroundColor: colors.primary[400],
                },
              },
            }}
          >
            <Button
              variant={timeframe === "Daily" ? "contained" : "outlined"}
              onClick={() => handleTimeframeChange("Daily")}
            >
              Daily
            </Button>
            <Button
              variant={timeframe === "Weekly" ? "contained" : "outlined"}
              onClick={() => handleTimeframeChange("Weekly")}
            >
              Weekly
            </Button>
            <Button
              variant={timeframe === "Monthly" ? "contained" : "outlined"}
              onClick={() => handleTimeframeChange("Monthly")}
            >
              Monthly
            </Button>
          </ButtonGroup>
        </Box>

        {/* Right: Select Box */}
        <Box mr={2}>
          <UniversalSelectBox
            label={selectedTopic}
            options={["All", "AI", "Machine Learning", "Blockchain"]}
            selectedValue={selectedTopic}
            onChange={handleTopicChange}
            IconComponent={<TrendingUpOutlinedIcon />}
          />
        </Box>
      </Box>

      {/* Chart Section */}
      <Box height="600px">
        <TrendingLineChart data={filteredData()} />
      </Box>
    </Box>
  );
};

export default TrendingTopics;
