import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import React from "react";

interface EngagementBarChartProps {
  data: Array<{ date?: string; type?: string; engagementRate: number }>;
  selectedMetric: "Engagement Rate" | "Content Type Engagement";
  isDashboard?: boolean; // Optional prop to configure the dashboard-specific view
}

const EngagementBarChart: React.FC<EngagementBarChartProps> = ({
  data,
  selectedMetric,
  isDashboard = false, // Default to false if not provided
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Determine axis labels and data keys dynamically
  const axisBottomLabel = selectedMetric === "Engagement Rate" ? "Date" : "Content Type";
  const indexBy = selectedMetric === "Engagement Rate" ? "date" : "type";

  return (
    <ResponsiveBar
      data={data}
      keys={["engagementRate"]}
      indexBy={indexBy}
      margin={{
        top: 50,
        right: isDashboard ? 30 : 50,
        bottom: isDashboard ? 30 : 50,
        left: 60,
      }}
      padding={0.5}
      colors={colors.blueAccent[500]}
      borderRadius={15}
      axisBottom={
        isDashboard
          ? undefined // Hide the bottom axis in dashboard mode
          : {
              tickSize: 5,
              tickPadding: 5,
              legend: axisBottomLabel,
              legendPosition: "middle",
              legendOffset: 40,
            }
      }
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        legend: isDashboard ? undefined : "Engagement Rate",
        legendPosition: "middle",
        legendOffset: -50,
      }}
      theme={{
        axis: {
          ticks: { text: { fill: colors.grey[100] } },
          legend: { text: { fill: colors.grey[100] } },
        },
        tooltip: {
            container: {
              background: colors.primary[400], // Tooltip background
              color: colors.grey[100], // Tooltip text color
              fontSize: "14px",
              borderRadius: "4px",
              boxShadow: "0px 3px 6px rgba(0,0,0,0.3)",
            },
          },
      }}
    />
  );
};

export default EngagementBarChart;
