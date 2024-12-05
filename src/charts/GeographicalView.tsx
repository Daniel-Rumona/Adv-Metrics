import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { useTheme } from "@mui/material";
import { tokens } from "../theme"
import mockData from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeatures";

interface GeographicalViewProps {
  isDashboard?: boolean;
}

const GeographicalView: React.FC<GeographicalViewProps> = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Extract data for the map
  const data = mockData.geographicalView.heatmapData;

  // Calculate dynamic domain based on data
  const values = data.map((d) => d.value);
  const minDomain = Math.min(...values);
  const maxDomain = Math.max(...values);

  return (
    <ResponsiveChoropleth
      data={data}
      features={geoFeatures.features} // Use features from mockGeoFeatures
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[minDomain, maxDomain]} // Dynamically calculated domain
      unknownColor="#666666"
      label="properties.name" // Match GeoJSON property
      valueFormat=".2s"
      projectionScale={isDashboard ? 50 : 150} // Adjust scale for compact view
      projectionTranslation={[0.5, 0.5]} // Center the map
      borderWidth={0.5}
      borderColor={colors.grey[100]}
      theme={{
        axis: { ticks: { text: { fill: colors.grey[100] } } },
        legends: { text: { fill: colors.grey[100] } },
        tooltip: {
          container: {
            background: colors.primary[400], // Tooltip background
            color: colors.grey[100], // Tooltip text color
            fontSize: '14px',
            borderRadius: '4px',
            boxShadow: '0px 3px 6px rgba(0,0,0,0.3)'
          }
        }
      }}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                translateX: 20,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemsSpacing: 5,
                itemDirection: "left-to-right",
                symbolSize: 12,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : []
      }
    />
  );
};

export default GeographicalView;
