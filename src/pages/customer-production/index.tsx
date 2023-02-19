import LoggedInLayout from "@/components/LoggedInLayout";
import { Container } from "@mui/material";
import { ReactElement } from "react";

export default function CustomerProduction() {
  return (
    <Container>
      <h1>CustomerProduction</h1>
    </Container>
  );
}

CustomerProduction.getLayout = function getLayout(page: ReactElement) {
  return <LoggedInLayout>{page}</LoggedInLayout>;
};
