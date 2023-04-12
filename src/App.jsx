import React from "react";
import EntryContextProvider from "./provider/EntryContext";
import Header from "./components/Header";
import Entry from "./components/Entry";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <EntryContextProvider>
      <Header />
      <Entry />
      <Footer />
      <Analytics />
    </EntryContextProvider>
  );
}
