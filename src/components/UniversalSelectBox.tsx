import React from "react";
import { Box, Select, MenuItem, Typography, SelectChangeEvent, useTheme } from "@mui/material";
import { tokens } from "../theme";

interface UniversalSelectBoxProps {
  label: string; // Label displayed beside the select box
  options: string[]; // List of options to display in the dropdown
  selectedValue: string; // Currently selected value
  onChange: (event: SelectChangeEvent<string>) => void; // Change handler for the select
  IconComponent?: React.ReactNode; // Optional leading icon
}

const UniversalSelectBox: React.FC<UniversalSelectBoxProps> = ({
  label,
  options,
  selectedValue,
  onChange,
  IconComponent,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      p={1}
      borderRadius={2.5}
      border="1px solid"
      borderColor={colors.primary[400]}
      sx={{
        backgroundColor: "background.default",
        width: "fit-content",
        height: "40px",
      }}
    >
      {IconComponent && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1976d2",
            color: "white",
            borderRadius: "50%",
            height: "32px",
            width: "32px",
          }}
        >
          {IconComponent}
        </Box>
      )}
      <Box>
        <Typography
          variant="body2"
          sx={{ fontSize: "14px", fontWeight: "bold", lineHeight: 1 }}
        >
          {label}
        </Typography>
      </Box>
      <Select
        value=  ""  //{selectedValue}
        onChange={onChange}
        disableUnderline
        sx={{
          minWidth: "36px",
          padding: 0,
          "& .MuiSelect-select": {
            padding: 0,
            display: "flex",
            alignItems: "center",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiSelect-icon": {
            marginRight: "2px",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default UniversalSelectBox;
