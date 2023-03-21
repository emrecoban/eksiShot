import React from "react";
import domtoimage from 'dom-to-image-more';
import { saveAs } from 'file-saver';
import { useEntryContext } from "../provider/EntryContext";

export default function Entry(){
    const { entry, loader } = useEntryContext()
    const entryNode = React.useRef()

    if(loader){
        return (
            <div id="content" className="max-w-7xl mx-auto p-4 flex flex-col space-y-3">
                <div className="loader mx-auto"></div>
            </div>
        )
    }

    if (Object.keys(entry).length != 0){
        return (
            <div id="content" className="max-w-7xl mx-auto p-4 flex flex-col space-y-3">
                <div id="capsul" className="max-w-3xl mx-auto">
                    <div id="wrapper" ref={entryNode} className="max-w-3xl p-4">
                        <div id="screenshot" className="max-w-2xl w-full border-2 rounded-lg shadow p-5 bg-white border-green-500 flex flex-col font-[Inter] space-y-2">
                            <img className="w-28 mb-2" src="img/eksisozluk_logo.svg" alt="ekşi sözlük logo" />
                            <h1 id="entry-title" className="font-bold text-sm">{entry.title}</h1>
                            <p id="entry-body" className="text-sm" dangerouslySetInnerHTML={{__html: entry.body}}></p>
                            <div id="entry-footer" className="flex flex-row justify-between">
                                <span className="text-lime-600">eksishot.vercel.app</span>
                                <p id="entry-author" className="flex flex-row space-x-2">
                                    <span className="text-sm">{entry.author}</span>
                                    <img className="h-5" src="img/damla.png" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button 
                onClick={()=>domtoimage
                .toBlob(entryNode.current, {copyDefaultStyles: false})
                .then(function (blob) {
                        window.saveAs(blob, 'eksiShot.png');
                    })
                }
                className="max-w-2xl w-full mx-auto bg-green-500 py-3 px-6 rounded-md text-black duration-300 hover:bg-green-400 font-[Inter]">
                    Görüntüyü İndir
                </button>
            </div>
        )
    }

    return null
}