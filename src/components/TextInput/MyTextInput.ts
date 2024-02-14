import { TextField, styled } from "@mui/material";

export const CustomTextField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    // color: theme.palette.primary.main, // Label color when focused
  },
  "& label": {
    color: theme.palette.text.primary, // Default label color
  },
  "& .MuiInput-underline:after": {
    // borderBottomColor: theme.palette.text.primary, // Underline color when focused
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.text.primary, // Default border color
    },
    // "&:hover fieldset": {
    //   borderColor: theme.palette.warning.main, // Border color on hover (optional)
    // },
    "&.Mui-focused fieldset": {
      // borderColor: theme.palette.text.primary, // Border color on focus
    },
    "& input": {
      color: theme.palette.text.primary, // Text color
    },
    "&:hover input": {
      color: theme.palette.text.primary, // Text color on hover (optional)
    },
    "&.Mui-focused input": {
      color: theme.palette.primary.main, // Text color when focused (optional)
    },
  },
}));

// export const CustomTextField = styled(TextField)({
//   "& label.Mui-focused": {
//     color: "green", // Label color when focused
//   },
//   "& label": {
//     color: "blue", // Default label color
//   },
//   "& .MuiInput-underline:after": {
//     borderBottomColor: "green", // Underline color when focused
//   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "red", // Default border color
//     },
//     "&:hover fieldset": {
//       borderColor: "yellow", // Border color on hover (optional)
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "green", // Border color on focus
//     },
//     "& input": {
//       color: "purple", // Text color
//     },
//     "&:hover input": {
//       color: "purple", // Text color on hover (optional)
//     },
//     "&.Mui-focused input": {
//       color: "purple", // Text color when focused (optional)
//     },
//   },
// });
