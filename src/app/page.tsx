"use client";

import Bio from "./bunpou/bio"
import Bunsetsu from "./bunpou/bunsetsu"
import Input from "./bunpou/input";
import { useState } from 'react';

export default function Home() {
    const bunList = [{
        id: 0,
        content: "その",
        kaitou: "“那”，指代之前提到的时间。",
    }, {
        id: 1,
        content: "翌る",
        kaitou: " “翌”实际应该写作翌（よく），表示“次，翌”，通常用于表示第二天或接下来的时间。",
    }, {
        id: 2,
        content: "日",
        kaitou: "“日子，天”。",
    }, {
        id: 3,
        content: "に",
        kaitou: "表示时间点，翻译为“在”。",
    }]

    const chinese = "在那之后的第二天"

    const [bunsetsuList, setBunsetsuList] = useState(bunList)
    const [chineseStr, setChineseStr] = useState(chinese)
    

    const bunsetsuItems = bunList.map(bunsetsu => {
        const char = bunsetsu.id == bunList.length-1 ? "" : (
            <span style={{ whiteSpace: 'pre' }}>  /  </span>
        );
        return (
            <>
                <Bunsetsu key={bunsetsu.id} content={bunsetsu.content} type="1"></Bunsetsu> 
                {char}
            </>
        )
    })

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <header className="text-center mb-8">
                    <Bio></Bio>
                </header>
                
                <main className="flex flex-col items-center">
                    <div className="flex items-center space-x-4 p-4 max-w-md mx-auto">
                        <Input setChineseValue={setChineseStr} setBunsetsuValue={setBunsetsuList}></Input>
                    </div>

                    <div className="mt-8 w-full max-w-md px-4">
                        <div className="mb-4">
                            <p className="text-gray-500 font-semibold mb-1">ほんやく:</p>
                            <p className="text-gray-700">{ chineseStr }</p>
                        </div>
                        <div>
                            <p className="text-gray-500 font-semibold mb-1">かいせき:</p>
                            <p className="text-gray-700">
                                {
                                    bunsetsuList.map((item, index) => {
                                        const char = index == bunsetsuList.length-1 ? "" : (
                                            <span style={{ whiteSpace: 'pre' }}>  /  </span>
                                        );
                                        return (
                                            <>
                                                <Bunsetsu content={item.content} type="1"></Bunsetsu> 
                                                {char}
                                            </>
                                        )
                                    })
                                }
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 w-full max-w-4xl px-4 flex justify-center">
                        <table className="min-w-full divide-y divide-gray-300 bg-white shadow-lg rounded-lg">
                        <thead className="bg-teal-100">
                            <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-teal-700 uppercase tracking-wider">
                                文部
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-teal-700 uppercase tracking-wider">
                                解析
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {bunsetsuList.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {item.content}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {item.kaitou}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </main>
                
                <footer className="mt-8 text-gray-500">
                    <p>&copy; 2024 Ke1iaa Website. All rights reserved.</p>
                </footer>
            </div>
        </>
      );
}
