import React from "react";

export default function Entry(){
    return (
        <div id="content" className="max-w-7xl mx-auto p-4 flex flex-col space-y-3">
            <div id="screenshot" className="max-w-2xl w-full border-2 rounded-lg shadow p-5 bg-white border-green-500 flex flex-col font-[Inter] space-y-2 mx-auto">
                <img className="w-28 mb-2" src="img/eksisozluk_logo.svg" alt="ekşi sözlük logo" />
                <h1 id="entry-title" className="font-bold">Başlık</h1>
                <p id="entry-body">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <div id="entry-footer" className="flex flex-row justify-between">
                    <span className="text-lime-600">eur98xxx.vercel.app</span>
                    <p id="entry-author" className="flex flex-row space-x-2">
                        <span>emrecoban</span>
                        <img className="h-6" src="img/damla.png" />
                    </p>
                </div>
            </div>
            <button className="max-w-2xl w-full mx-auto bg-green-500 py-3 px-6 rounded-md text-black duration-300 hover:bg-green-400 font-[Inter]">
                Görüntüyü İndir
            </button>
        </div>
    )
}