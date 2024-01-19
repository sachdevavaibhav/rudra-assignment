import Button from "@mui/material/Button";

function CustomButton({children, styleProp, ...props}) {
    return (
        <Button
            variant="contained"
            sx={{
                boxShadow: 'none',
                textTransform: 'none',
                width: '100%',
                ...styleProp
            }}
            {...props}
        >
            {children}
        </Button>
    )
};

export default CustomButton;