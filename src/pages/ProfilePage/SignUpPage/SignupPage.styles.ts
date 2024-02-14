import { styled } from "@mui/material";

export const SignUpFieldsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));
export const SignUpButtonsContainer = styled("div")(({ theme }) => ({
  paddingBottom: 4,
  paddingTop: 12,
  display: "flex",
  gap: 8,
}));

export const SignUpButton = styled("button")(({ theme }) => ({
  // flex: 1,
  width: "100%",
  // padding: "8px 16px",
  borderRadius: 8,
  // backgroundColor: theme.palette.primary.main,
  // color: theme.palette.text.primary,
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
