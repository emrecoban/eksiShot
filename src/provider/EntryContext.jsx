import React from "react";
import scrapeHtmlWeb from "scrape-html-web";
import getEntryId from '../utility/getEntryId';

const EntryContext = React.createContext(null)

export default function EntryContextProvider({children}){
    const [entry, setEntry] = React.useState({})
    const [loader, setLoader] = React.useState(false)
    async function fetchEntry(link){
        try {
            const options = {
                url: link,
                mainSelector: "#topic",
                childrenSelector: [
                    { key: "id", selector: "li", attr:"data-id" },
                    { key: "title", selector: "#title", attr:"data-title" },
                    { key: "author", selector: "li", attr: "data-author" },
                    { key: "body", selector: ".content", type:"text" },
                    { key: "date", selector: ".entry-date", type:"text" },
                ],
              };
              const data = await scrapeHtmlWeb(options);

            const id = getEntryId(link)

            setEntry({
                id: id,
                title: data[0].title,
                body: data[3].body,
                author: data[3].author,
                date: data[3].date,
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