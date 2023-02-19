import LoggedInLayout from "@/components/LoggedInLayout";
import { Container } from "@mui/material";
import { ReactElement } from "react";

export default function Inventory() {
  return (
    <Container>
      <h1>Inventory</h1>
    </Container>
  );
}

Inventory.getLayout = function getLayout(page: ReactElement) {
  return <LoggedInLayout>{page}</LoggedInLayout>;
};
