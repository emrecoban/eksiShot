import React from "react";
import axios from 'axios';
import * as cheerio from 'cheerio';
import EntryContextProvider from "./provider/EntryContext";
import Header from "./components/Header";
import Entry from "./components/Entry";
import Footer from "./components/Footer";


/* element.find(".content").find("br").replaceWith("\n");

let entry_id = element.attr("data-id");
let title = $("#title").attr("data-title");
let body = element.find(".content").html().trim();
let author = element.attr("data-author");
let fav_count = element.attr("data-favorite-count");
let date = element.find(".entry-date").text();
let [created_at, updated_at] = parseDate(date); 

let entry = {
  id: +entry_id,
  title,
  body,
  author,
  fav_count: +fav_count,
  created_at,
  updated_at,
};
return entry; */

export default function App(){
    async function gitAl(id){
        try {
            const response = await axios.get("https://eksisozluk.com/entry/" + id)
            let $ = cheerio.load(response.data, { decodeEntities: false });
            let element = $(`li[data-id=${id}]`)
            let body = element.find(".content").html().trim();
            let title = $("#title").attr("data-title");
            let author = element.attr("data-author");
            let date = element.find(".entry-date").text();
            console.log(`Entry içeriği [${id}]: `, body)
        } catch (error) {
            console.log("gelen hata: ", error.message)
        }
    }
    //gitAl(149620236)
    // nav className içerisindeki bg-slate-500 kaldır.
    return (
        <EntryContextProvider>
            <Header />
            <Entry />
            <Footer />
        </EntryContextProvider>
    )
}