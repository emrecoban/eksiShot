import React from "react";
import EntryContextProvider from "./provider/EntryContext";
import Header from "./components/Header";
import Entry from "./components/Entry";
import Footer from "./components/Footer";

export default function App(){
    return (
        <EntryContextProvider>
            <Header />
            <Entry />
            <Footer />
        </EntryContextProvider>
    )
}