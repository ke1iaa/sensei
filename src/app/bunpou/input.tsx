"use client";

import React, { useState } from 'react';

interface InputProps {
    setBunsetsuValue: (value: any[]) => void;
    setChineseValue: (value: string) => void;
}

export default function Input({setChineseValue, setBunsetsuValue}: InputProps) {
    const [inputValue, setInputValue] = useState<string>('');

    const handleButtonClick = async () => {
        try {
            const response = await fetch('/api/test', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input: inputValue }),
            });

            if (response.ok) {
                const data = await response.json();
                setBunsetsuValue(data);
                setChineseValue(data);
            } else {
                console.error('请求失败');
            }
        } catch (error) {
            console.error('请求发生错误:', error);
        }
    };

    
    return (
        <>
            <input type="text" placeholder="分析したい文を入力してください"
            className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full w-80"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleButtonClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            クエリ
            </button>
        </>
    )
}