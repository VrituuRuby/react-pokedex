import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { client } from "./api";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "./styles/GlobalStyles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Header />
      <Main />
      <footer>&#169; Victor Velozo 2023</footer>
    </ApolloProvider>
  </React.StrictMode>
);
