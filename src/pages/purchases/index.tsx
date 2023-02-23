import LoggedInLayout from "@/components/LoggedInLayout";
import { Container } from "@mui/material";
import { ReactElement } from "react";

export default function Purchases() {
  return (
    <Container>
      <h1>Purchases</h1>
    </Container>
  );
}

Purchases.getLayout = function getLayout(page: ReactElement) {
  return <LoggedInLayout>{page}</LoggedInLayout>;
};
