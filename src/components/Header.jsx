import React from "react";
import { useEntryContext } from "../provider/EntryContext";

export default function Header(){
    const [entryURL, setEntryURL] = React.useState("")
    const { handleEntry, setLoader } = useEntryContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        handleEntry(entryURL)
        setLoader(true)
    }

    return (
    <div className="w-full bg-slate-50 p-4 shadow flex justify-center">
        <nav className="max-w-7xl w-full flex items-center space-x-4 justify-between">
            <a href="#" className="nav-start flex items-center flex-none">
                <img className="h-12" alt="eksiShot Logo" src="img/eksiShot_logo.png" />
                <span className="font-bold font-[Inter] text-green-600">eksiShot</span>
            </a>
            <form onSubmit={handleSubmit} className="grow flex justify-center">
                <input
                value={entryURL}
                onChange={(e)=>setEntryURL(e.target.value)} 
                type="text" 
                placeholder="Enter entry link..." 
                className="h-12 border-2 p-4 rounded-md border-green-500 focus:outline-none focus:border-sky-500 w-full max-w-lg" />
            </form>
{/*             <button
            className="flex-none hover:bg-lime-100 py-3 px-6 rounded-md text-black duration-300">
                Hakkında
            </button> */}
        </nav>
    </div>
    )
}