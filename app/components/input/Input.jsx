import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function Input({placeholder, icon, iconPosition="start", ...props}) {
    return (
        <TextField
            id="outlined-basic"
            placeholder={placeholder}
            variant="outlined"
            size="small"
            sx={{
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        border: "1px solid",
                        borderColor: "background.default"
                    },
                    "&:hover fieldset": {
                        border: "1px solid",
                        borderColor: "background.default"
                    },
                    "&.Mui-focused fieldset": {
                        border: "1px solid",
                        borderColor: "background.default"
                    }
                }
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position={iconPosition}>
                        {icon}
                    </InputAdornment>
                )
                }}
            {...props}
         />
    )
};

export default Input;