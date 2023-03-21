import React from "react";

export default function Footer(){
    return (
        <div id="footer" className="bg-white shadow p-3 absolute inset-x-0 bottom-0 font-[Inter] text-sm">
            <footer className="max-w-2xl w-full mx-auto text-center">
                &copy; 2023 <span className="text-green-600">eksiShot</span> built by emrecoban with ReactJS · <a href="#" className="text-blue-500 hover:text-blue-600">GitHub</a>
            </footer>
        </div>
    )
}