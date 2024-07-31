'use client'

import React, {useState, useEffect} from "react";

import Image from "next/image";

export default function Home() {

  const[items, setItems] = useState([
    {name: 'Coffee', price: 3.50},
    {name: 'Tea', price: 2.50},
    {name: 'Milk', price: 2.00},
    {name: 'Sugar', price: 1.00},
    {name: 'Honey', price: 2.00},
  ]);

  const [total, setTotal] = useState(0);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl p-4 text-center">Express Tracker</h1>
        <div className="bg-slate-800 p-4 rounded-lg">
          <form className="grid grid-cols-6 items-center text-black">
            <input className="col-span-3 p-3 border" type="text" placeholder="Enter Item" />
            <input className="col-span-2 p-3 border mx-3" type="number" placeholder="Enter $" />
            <button className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl" type="submit">+</button>
          </form>

          <ul>
            {items.map((item, id) => (
              <li key={id} className="my-4 w-full flex justify-between text-white">
                <div className="p-4 w-full flex justify-between">
                  <span className="capitalize">{item.name}</span>
                  <span>${item.price}</span>
                </div>
                <button>X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
