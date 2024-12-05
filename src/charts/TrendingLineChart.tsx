import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import React from "react";

interface RawDataPoint {
  topic: string;
  date: string;
  value: number;
}

interface TransformedDataPoint {
  id: string;
  data: Array<{ x: string; y: number }>;
}

interface TrendingLineChartProps {
  data: Array<RawDataPoint> | Array<TransformedDataPoint>;
  isDashboard?: boolean;
}

const TrendingLineChart: React.FC<TrendingLineChartProps> = ({ data, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Transform raw data if necessary
  const transformedData: Array<TransformedDataPoint> = Array.isArray(data) && "topic" in data[0]
    ? (data as RawDataPoint[]).reduce((acc: TransformedDataPoint[], point) => {
        const topicSeries = acc.find((series) => series.id === point.topic);

        if (topicSeries) {
          topicSeries.data.push({ x: point.date, y: point.value });
        } else {
          acc.push({ id: point.topic, data: [{ x: point.date, y: point.value }] });
        }

        return acc;
      }, [])
    : (data as TransformedDataPoint[]);

  return (
    <ResponsiveLine
      data={transformedData}
      curve="monotoneX"
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          ticks: { text: { fill: colors.grey[100] } },
          legend: { text: { fill: colors.grey[100] } },
        },
        legends: { text: { fill: colors.grey[100] } },
        tooltip: {
          container: {
            background: colors.primary[400],
            color: colors.grey[100],
            fontSize: "14px",
            borderRadius: "4px",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
          },
        },
      }}
      margin={{ top: 50, right: 110, bottom: 70, left: 60 }} // Increase bottom margin
      xScale={{ type: "point" }}
      yScale={{ type: "linear", stacked: false, min: "auto", max: "auto" }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        legend: isDashboard ? undefined : "Date",
        legendPosition: "middle",
        legendOffset: 60, // Move legend farther from the axis
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        legend: isDashboard ? undefined : "Popularity",
        legendPosition: "middle",
        legendOffset: -50,
      }}
      colors={{ scheme: "category10" }}
      legends={[
        {
          anchor: "top",
          direction: "row",
          justify: false,
          translateX: 1,
          translateY: -30,
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          itemsSpacing: 100,
          symbolSize: 10,
          symbolShape: "circle",
          padding: 10,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      useMesh={true}
      enableGridX={false}
      enableSlices="x"
    />
  );
};

export default TrendingLineChart;
