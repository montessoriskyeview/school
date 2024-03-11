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
                <Typography>
                    Next-gen montessori education
                </Typography>
            </ScrollingText>
            <ScrollingText>
                <Typography>
                    Montessori: education philosophy and practice that fosters rigorous, self-motivated growth for children and adolescents in all areas of their development, with a goal of nurturing each child's natural desire for knowledge, understanding, and respect.
                </Typography>
            </ScrollingText>
            <Link
                variant="h1"
                sx={{
                    cursor: "pointer",
                    paddingBottom: 10,
                }}
                href="#"
            >
                Register today
            </Link>
        </Box>
    );
}

interface BigTextProps {
    text: string;
    sx?: SxProps<Theme>;
}
const BigText = ({ text, sx }: BigTextProps) => {
    return (
        <Typography
            variant="h2"
            sx={{
                paddingBottom: 50,
                ...sx,
            }}
        >
            {text}
        </Typography>
    )
}
