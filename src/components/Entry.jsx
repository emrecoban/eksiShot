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

    if (Object.keys(entry).length === 0){
        return (
            <div id="info" className="max-w-7xl mx-auto p-4 flex flex-col space-y-3">
                <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <div className="flex">
                        <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                        <div>
                        <p className="font-bold">VPN Açık Olmalı</p>
                        <p className="text-sm">eksisozluk.com adresine getirilen erişim engelinden dolayı Türkiye lokasyonlu bağlantılarda VPN kullanmalısınız.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <div className="flex">
                        <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                        <div>
                        <p className="font-bold"><a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en">Allow CORS</a> Eklentisini Yükleyin</p>
                        <p className="text-sm">Tarayıcılarda varsayılan olarak farklı kaynaklardan veri almak engellenir. Bu eklentiyi etkinleştirerek, engellemeyi ortadan kaldırabilirsiniz.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return null
}