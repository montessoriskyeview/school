import { Box, Link, SxProps, Theme, Typography } from "@mui/material";
import { ScrollingText } from "./animation/ScrollingText";

export const Content = () => {
    return (
        <Box
            sx={{
                paddingX: 5,
            }}
        >
            <ScrollingText>
                <Typography
                    sx={{ position: "absolute" }}
                >
                    Next-gen montessori education
                </Typography>
            </ScrollingText>
            <ScrollingText>
                <Typography
                    sx={{ position: "absolute" }}
                >
                    Montessori: education philosophy and practice that fosters rigorous, self-motivated growth for children and adolescents in all areas of their development, with a goal of nurturing each child's natural desire for knowledge, understanding, and respect.
                </Typography>
            </ScrollingText>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Link
                    variant="h4"
                    sx={{
                        cursor: "pointer",
                        paddingBottom: 10,
                    }}
                    href="https://google.com"
                >
                    Register today
                </Link>
            </Box>
        </Box>
    );
}
