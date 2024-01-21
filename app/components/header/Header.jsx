import Stack from "@mui/material/Stack";
import Input from "../input/Input";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";


function Header() {
    return (
        <AppBar position="fixed" elevation={0} sx={{padding:0}}>
            <Toolbar
                sx={{
                    padding: 0,
                    backgroundColor: "background.paper",
                }}
            >
                <Stack direction="row" alignItems="center" backgroundColor="background.paper" justifyContent="space-between" py={2}
                    borderBottom="1px solid #E9ECEF"
                    width="100%"
                >
                    <Stack direction="row" spacing={4} alignItems="center" width="100%">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Image src="/logo.svg" alt="logo" width={28} height={28} />
                            <Typography variant="h1" fontSize={"2rem"} fontWeight={500} color="#232D42">Hope Ui</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Box
                                backgroundColor="primary.main"
                                borderRadius="50%"
                                width={"2rem"}
                                height={"2rem"}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                role="button"
                                sx={{ cursor: "pointer" }}
                            >
                                <Image src="/leftArrow.svg" alt="arrow-left" width={20} height={20} />
                            </Box>

                            <Input
                                placeholder="Search..."
                                iconPosition="start"
                                icon={<Image src="/Search.svg" alt="search" width={22} height={22} />}
                            />
                        </Stack>
                    </Stack>

                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                            role="button"
                            sx={{ cursor: "pointer" }}
                        >
                            <Image src="/country.svg" alt="country" width={30} height={30} />
                        </Box>
                        <Box
                            role="button"
                            sx={{ cursor: "pointer" }}
                        >
                            <Image src="/notification.svg" alt="bell" width={22} height={22} />
                        </Box>
                        <Box
                            role="button"
                            sx={{ cursor: "pointer" }}
                        >
                            <Image src="/message.svg" alt="message" width={22} height={22} />
                        </Box>
                        <Box
                            role="button"
                            sx={{ cursor: "pointer" }}
                        >
                            <Image src="/profile.svg" alt="profile" width={42} height={42} />
                        </Box>
                        <Stack justifyItems="center" width="10rem" >
                            <Typography
                                fontWeight={400}
                                fontSize={"1rem"}
                                color="text.primary"
                            >
                                Austin Robertson
                            </Typography>
                            <Typography
                                fontWeight={400}
                                fontSize={"0.8rem"}
                                color="text.secondary"
                            >
                                Marketing Administrator
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

            </Toolbar>
        </AppBar>
    )
};

export default Header;