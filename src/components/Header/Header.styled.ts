import { styled } from "@mui/material";

export const HeaderDiv = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  padding: 8,
  height: 54,
  display: "flex",
  justifyContent: "center",
  position: "relative",
}));

export const HeaderTitle = styled("h2")(({ theme }) => ({
  margin: "auto",
}));

export const HeaderButtonContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  right: 16,
  top: 16,
  display: "flex",
  gap: 8,
}));
