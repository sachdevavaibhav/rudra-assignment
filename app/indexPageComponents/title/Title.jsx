import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomButton from "@/app/components/customButton/CustomButton";
import Image from "next/image";

function Title() {
    return (
        <Box
            sx={{
                background: 'radial-gradient(36.28% 150.93% at 50% 50%, #3B8AFF 0%, #0048B2 100%);',
                borderRadius: '0 0 1rem 1rem',
                color: '#fff',
                height: "12rem",
                padding: '1.5rem 3rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    zIndex: '10',
                    position: 'relative',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: '700',
                        fontSize: '2.5rem',
                        zIndex: '10',
                        position: 'relative',
                    }}
                >
                    Hello Devs !
                </Typography>
                <CustomButton
                    styleProp={{
                        width: '15rem',
                        backgroundColor: 'rgba(58, 87, 232, 0.35);',
                    }}
                    startIcon={<Image src="/announcement.svg" alt="chevron" width={25} height={25} />}
                >
                    Announcements
                </CustomButton>
            </Box>
            <Typography
                variant="h2"
                sx={{
                    fontWeight: '500',
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    zIndex: '10',
                    position: 'relative',
                }}
            >
                We are on a mission to help developers like you to build beautiful projects for FREE.
            </Typography>

            <Box
                sx={{
                    width: '86rem',
                    height: '86rem',
                    background: '#fff',
                    boxShadow: '24px 32px 184px 24px rgba(6, 8, 89, 0.75) inset;',
                    borderRadius: '50%',
                    mixBlendMode: 'multiply',
                    opacity: '0.75',
                    marginTop: '2rem',
                }}
            />

            <Box
                sx={{
                    width: '102rem',
                    height: '104rem',
                    background: '#fff',
                    boxShadow: '24px 32px 184px 24px rgba(6, 8, 89, 0.75) inset;',
                    borderRadius: '50%',
                    mixBlendMode: 'multiply',
                    opacity: '0.75',
                    position: 'absolute',
                    top: '-50%',
                    left: '-8%',
                }}
            />

            <Box
                sx={{
                    width: '132rem',
                    height: '134rem',
                    background: '#fff',
                    boxShadow: '24px 32px 184px 24px rgba(6, 8, 89, 0.75) inset;',
                    borderRadius: '50%',
                    mixBlendMode: 'multiply',
                    opacity: '0.75',
                    position: 'absolute',
                    top: '-180%',
                    left: '-10%',
                }}
            />

        </Box>
    )
}

export default Title;