import React from "react";
import axios from 'axios';
import * as cheerio from 'cheerio';
import getEntryId from '../utility/getEntryId';

const EntryContext = React.createContext(null)

export default function EntryContextProvider({children}){
    const [entry, setEntry] = React.useState({})
    const [loader, setLoader] = React.useState(false)
    async function fetchEntry(link){
        try {
            const id = getEntryId(link)
            const response = await axios.get(link)
            const $ = cheerio.load(response.data, { decodeEntities: false });
            const element = $(`li[data-id=${id}]`)
            const body = element.find(".content").html().trim();
            const title = $("#title").attr("data-title");
            const author = element.attr("data-author");
            const date = element.find(".entry-date").text();
            console.log(`Entry içeriği [${id}]: `, body)
            setEntry({
                id: id,
                title,
                body,
                author,
                date
            })
        } catch (error) {
            if(error.message === "timeout exceeded"){
                console.log("VPN aç.")
            }else{
                console.log("gelen hata: ", error.message)
            }
        } finally {
            setLoader(false)
        }
    }
    
    return (
        <EntryContext.Provider value={{entry, handleEntry: fetchEntry, loader: loader, setLoader: setLoader}}>
            {children}
        </EntryContext.Provider>
    )
}

export const useEntryContext = () => React.useContext(EntryContext)


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