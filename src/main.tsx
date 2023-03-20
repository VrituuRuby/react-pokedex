import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { client } from "./api";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Table } from "./components/Table";
import "./styles/GlobalStyles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Header />
      <main className="main">
        <Table />
        <Info />
      </main>
      <footer>© Victor Velozo 2023</footer>
    </ApolloProvider>
  </React.StrictMode>
);
