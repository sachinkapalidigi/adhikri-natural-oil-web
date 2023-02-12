import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@mui/material";
import Head from "next/head";
import { theme } from "./_theme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adhikrita Natural Oil</title>
        <meta name="description" content="Cold press cooking oils" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/adhikritalogo.ico" />
      </Head>
      <main>
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      </main>
    </>
  );
}
