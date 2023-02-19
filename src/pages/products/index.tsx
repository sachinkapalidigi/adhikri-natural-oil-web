import LoggedInLayout from "@/components/LoggedInLayout";
import { Container } from "@mui/material";
import { ReactElement } from "react";

export default function Products() {
  return (
    <Container>
      <h1>Products</h1>
    </Container>
  );
}

Products.getLayout = function getLayout(page: ReactElement) {
  return <LoggedInLayout>{page}</LoggedInLayout>;
};
