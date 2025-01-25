import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Grid2,
} from "@mui/material";
import { fetchWords } from "./data-api";

export default function WordList() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const getWords = async () => {
      try {
        const data = await fetchWords();
        setWords(data);
      } catch (error) {
        console.error("Failed to fetch words:", error);
      }
    };

    getWords();
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "#F0F4F8" }}
        >
          Word List
        </Typography>
        <Grid2 container spacing={2}>
          {words.map((word) => (
            <Grid2 item xs={12} sm={6} md={4} key={word.id}>
              <Card
                sx={{
                  background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 6px rgba(186, 10, 202, 0.56)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 8px rgba(247, 17, 158, 0.64)",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#F0F4F8" }}
                  >
                    {word.word}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#B0B8C1" }}>
                    Pronunciation: {word.pronunciation}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
}