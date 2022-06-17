export const textFieldSx = () => {
  return {
    marginBottom: 0,
    width: "100%",
    maxWidth: "400px",
    padding: 0,

    input: {
      background: "whitesmoke",
      borderRadius: 1,
      color: "navy",
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        borderColor: "navy",
      },
    },
    "& label.Mui-focused": {
      color: "navy",
    },
    "& label": {
      color: "navy",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "navy",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "navy",
      },
      "&.Mui-focused fieldset": {
        borderColor: "navy",
      },
    },
  };
};
