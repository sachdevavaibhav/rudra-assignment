import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import CustomButton from '../button/CustomButton';

import { homeData, pagesData, elementsData } from './data';

function RenderSidebarContent({heading, dataArr}) {
    return(
        <>
            <Typography
                color={"#ADB5BD"}
                fontWeight={600}
                fontSize={"1rem"}
                px={"2rem"}
            >
                {heading}
            </Typography>
            <List>
                {dataArr?.map((data) => (
                <ListItem key={data.title} disablePadding sx={{marginBottom: '0.2rem'}}>
                    <CustomButton
                        styleProp={{
                            color: data.title === 'Dashboard' ? '#fff' : 'text.secondary',
                            backgroundColor: data.title === 'Dashboard' ? 'primary.main' : 'transparent',
                            justifyContent: 'flex-start',
                            padding:"0.6rem 2rem",
                            fontWeight: 400,
                            "&:hover": {
                                boxShadow: 'none',
                                backgroundColor: data.title === 'Dashboard' ? 'primary.main' : 'primary.light',
                                color: data.title === 'Dashboard' ? '#fff' : 'primary.main',
                            },

                        }}
                        startIcon={<Image src={data.icon} alt={data.title} width={20} height={20}/>}
                    >
                        <Box display='flex' justifyContent="space-between" alignItems="center" width="100%">
                            <Box>
                                {data.title}
                            </Box>
                            {data.isCollapsable?
                                <Image src="/sidebar/chevron.svg" alt="chevron" width={25} height={25} />
                            :null}
                        </Box>
                    </CustomButton>
                </ListItem>
                ))}
            </List>
            <Divider
                sx={{
                    margin: '0 auto 1rem auto',
                    backgroundColor: 'background.default',
                    width: 'calc(100% - 2rem)',
                    height: '0.06rem',
                }}
            />
        </>
    )
}


function SidebarContent() {
    return (
        <Box marginTop="1rem">
            <RenderSidebarContent heading="Home" dataArr={homeData} />
            <RenderSidebarContent heading="Pages" dataArr={pagesData} />
            <RenderSidebarContent heading="Elements" dataArr={elementsData} />
        </Box>
    )
};

export default SidebarContent;