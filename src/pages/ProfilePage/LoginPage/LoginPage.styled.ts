import { styled } from "@mui/material";

export const LoginSignupContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: 8,
  alignItems: "center",
}));

export const LoginFieldsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

export const LoginButtonsContainer = styled("div")(({ theme }) => ({
  paddingBottom: 4,
  paddingTop: 12,
  display: "flex",
  gap: 8,
}));

export const LoginButton = styled("button")(({ theme }) => ({
  width: "100%",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
