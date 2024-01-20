import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "@/app/components/input/Input";
import CustomButton from "@/app/components/customButton/CustomButton";

import Image from "next/image";

function ConversionCard() {
    return (
        <Card
            sx={{
                margin: '1.5rem 3rem',
                borderRadius: '0.5rem',
                width: '30rem',
                height: '20rem',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    height: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        padding: '0rem 1rem 0rem 0rem',
                        marginBottom: '1rem',
                    }}
                >
                    <Box display="flex" alignItems="center" gap={2}>
                        <Image src="/conversion.svg" alt="conversion" width={40} height={40} />
                        <Typography variant="h2" sx={{ fontWeight: '500', fontSize: '1.5rem', }}>
                            Conversion
                        </Typography>
                    </Box>
                    <Box role="button" sx={{cursor: "pointer"}}>
                        <Image src="/ellipse.svg" alt="more" width={20} height={20} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        padding: '0.5rem 1.5rem',
                        height: '100%',
                        width: '100%',
                    }}
                    >
                    <Input
                        placeholder="1000"
                        icon="| GRD"
                        iconPosition="end"
                    />
                    <Input
                        placeholder="1000"
                        icon="| USD"
                        iconPosition="end"
                    />
                    <Input
                        placeholder="1000"
                        icon="| Euro"
                        iconPosition="end"
                    />
                    <CustomButton>
                        <Box as="span">Archive!</Box>
                    </CustomButton>
                </Box>
            </CardContent>
        </Card>
    )
};

export default ConversionCard;