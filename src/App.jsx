import React from "react";
import EntryContextProvider from "./provider/EntryContext";
import Header from "./components/Header";
import Entry from "./components/Entry";
import Footer from "./components/Footer";
import { inject } from '@vercel/analytics';

export default function App(){
    inject();
    return (
        <EntryContextProvider>
            <Header />
            <Entry />
            <Footer />
        </EntryContextProvider>
    )
}