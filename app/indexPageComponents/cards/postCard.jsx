import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

import Input from "@/app/components/input/Input";

import Image from "next/image";

import apolloClient from "@/app/utils/apollo-client";
import { GET_SHOW_WITH_DESCRIPTION } from "@/app/utils/graphql-queries";

async function getShowWithDescription() {
    const { data } = await apolloClient.query({
        query: GET_SHOW_WITH_DESCRIPTION,
    });

    return data;
};

async function PostCard() {
    const {netflix_shows_by_pk:data} = await getShowWithDescription();
    return(
        <Card
        sx={{
            margin: '1.5rem 3rem',
            borderRadius: '0.5rem',
        }}>
            <CardContent
                xs={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    padding: '0.5rem 1.5rem',
                }}
            >
                <Box display="flex" alignItems="center" gap={2} marginBottom="1rem">
                    <Box
                        padding=".5rem"
                        border= "1px solid #8A92A6"
                        borderRadius="50%"
                    >
                        <Avatar
                            alt="post"
                            src="/netflix.jpg"
                            sx={{
                                width: '3rem',
                                height: '3rem',
                            }}
                        />
                    </Box>
                    <Box>
                        <Typography
                            fontWeight={500}
                            fontSize="1.2rem"
                        >
                            {data?.title}
                        </Typography>
                        <Typography
                            color="primary.dark"
                            fontSize="0.8rem"
                        >
                            {data?.duration}
                        </Typography>
                    </Box>
                </Box>

                <Typography
                    color="text.secondary"
                    marginBottom="1rem"
                >
                    {data?.description}
                </Typography>

                <Box display="flex" justifyContent="space-between">
                    <Box display="flex" gap={1} alignItems="center">
                        <Box display="flex" gap={1} alignItems="center">
                            <Image src="/like.svg" alt="like" width={30} height={30} />
                            <Typography
                                color="text.secondary"
                            >
                                Like
                            </Typography>
                        </Box>
                        <Box display="flex" gap={1} alignItems="center">
                            <Image src="/comment.svg" alt="comment" width={30} height={30} />
                            <Typography
                                color="text.secondary"
                            >
                                140
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" gap={1} alignItems="center">
                        <Image src="/share.svg" alt="post" width={30} height={30} />
                        <Typography
                            color="primary.dark"
                        >
                            99 Share
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{marginTop: "1rem"}} />

                <Box display="flex" alignItems="center" gap={2} margin="1rem 0">
                    <Box
                        padding=".5rem"
                        border= "1px solid #8A92A6"
                        borderRadius="50%"
                    >
                        <Avatar
                            alt="post"
                            src="/netflix.jpg"
                            sx={{
                                width: '3rem',
                                height: '3rem',
                            }}
                        />
                    </Box>
                    <Box>
                        <Typography
                            fontWeight={500}
                            fontSize="1.2rem"
                        >
                            Paul Molive
                        </Typography>
                        <Typography
                            color="text.secondary"
                            fontSize="0.8rem"
                        >
                            Lorem ipsum dolor sit amet, consectetur elit.
                        </Typography>
                    </Box>
                </Box>

                <Input
                    placeholder="Recipient’s Username"
                    icon={<Image src="/telegram.svg" alt="send" width={30} height={30} />}
                    iconPosition="end"
                />

            </CardContent>
        </Card>
    )

};

export default PostCard;