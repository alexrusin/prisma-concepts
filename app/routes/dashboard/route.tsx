import { Container, Typography } from "@mui/material";
import MenuBar from "./components/AppBar";

export default function Dashboard() {
  return (
    <>
      <MenuBar />
      <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
        <Typography variant="h4" component="h1">
          My awesome dashboard page
        </Typography>
      </Container>
    </>
  );
}
