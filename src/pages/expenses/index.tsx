import LoggedInLayout from "@/components/LoggedInLayout";
import { Container } from "@mui/material";
import { ReactElement } from "react";

export default function Expenses() {
  return (
    <Container>
      <h1>Expenses</h1>
    </Container>
  );
}

Expenses.getLayout = function getLayout(page: ReactElement) {
  return <LoggedInLayout>{page}</LoggedInLayout>;
};
