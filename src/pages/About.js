import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  useEffect(() => {
    document.title = "Fusion Lab | About";
  });
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
            p: 3,
          },
          "& p": {
            textAlign: "justify",
            marginRight: "10px",
            marginLeft: "10px",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to FUSION LAB</Typography>
        <p>
          Id dolore laboris ex commodo consequat sint nisi commodo excepteur
          cillum amet amet adipisicing. Laboris ut reprehenderit sit velit
          fugiat dolore proident eiusmod qui esse culpa. Sit commodo non magna
          dolor. Voluptate ipsum labore exercitation fugiat eiusmod duis dolor
          reprehenderit nostrud nulla sint veniam. Eiusmod esse duis amet
          pariatur incididunt duis. Voluptate minim commodo ex eiusmod id non
          proident ea quis consectetur ipsum exercitation eiusmod. Deserunt ad
          laborum duis sint sit. Quis occaecat veniam amet officia adipisicing.
          Eiusmod pariatur aute amet officia ullamco nostrud nisi ipsum. Minim
          consectetur fugiat sit adipisicing ut fugiat ea eu do. Velit veniam
          laborum ex nulla ea nostrud quis nostrud consectetur ut tempor tempor.
        </p>
        <br />
        <p>
          Irure mollit eiusmod voluptate proident Lorem mollit culpa ea. Ut
          cillum ex tempor eu qui labore culpa laborum dolore minim sint ut
          commodo officia. Incididunt ad magna voluptate eu aliquip mollit aute
          officia consectetur adipisicing tempor esse. Ad occaecat sunt qui
          cupidatat labore magna enim exercitation voluptate proident. Anim
          reprehenderit enim amet ex et enim commodo laboris aliqua elit ullamco
          et nisi. Sint aliquip culpa veniam nisi. Eiusmod duis cupidatat
          consequat ipsum sunt. Nulla nulla quis proident aute exercitation
          mollit ipsum aute non occaecat elit quis velit. Aute eiusmod aute
          fugiat do officia. Incididunt consequat aute in laboris nostrud
          pariatur anim ex. Aliqua ut sint sunt ex sint proident.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
