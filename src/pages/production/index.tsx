import LoggedInLayout from "@/components/LoggedInLayout";
import { Container } from "@mui/material";
import { ReactElement } from "react";

export default function Production() {
  return (
    <Container>
      <h1>Production</h1>
    </Container>
  );
}

Production.getLayout = function getLayout(page: ReactElement) {
  return <LoggedInLayout>{page}</LoggedInLayout>;
};
