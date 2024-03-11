import { Box, Link, SxProps, Theme, Typography } from "@mui/material";

export const Content = () => {
    return (
        <Box
            sx={{
                paddingX: 5,
            }}
        >
            <BigText
                text="Next-gen montessori education"
                sx={{
                    paddingTop: 10,
                }}
            />
            <BigText
                text="Montessori: education philosophy and practice that fosters rigorous, self-motivated growth for children and adolescents in all areas of their development, with a goal of nurturing each child's natural desire for knowledge, understanding, and respect."
            />
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
            variant="h1"
            sx={{
                paddingBottom: 50,
                ...sx,
            }}
        >
            {text}
        </Typography>
    )
}
