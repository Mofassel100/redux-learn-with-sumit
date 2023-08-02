import { useState } from "react";
import Counter from "./components/Counter";
import Statas from "./components/Statas";
const initialize = [
    {
        id: 1,
        count: 0
    },
    {
        id: 2,
        count: 0
    }
]

export default function App() {
    const [state, setState] = useState(initialize)

    const totalCount = () => {
        return state.reduce((total, counter) => total + counter.count, 0)
    }
    const increament = (id) => {
        const updataCount = state.map(c => {
            if (c.id === id) {
                return {
                    ...c,
                    count: c.count + 1
                }
            }
            return { ...c }

        })
        setState(updataCount)

    }
    const decreament = (id) => {
        const updataCount = state.map(c => {
            if (c.id === id) {
                return {
                    ...c,
                    count: c.count - 1
                }
            }
            return { ...c }

        })
        setState(updataCount)

    }
    return (
        <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">

            <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>
            {
                state.map(c =>



                    <Counter
                        key={c.id}
                        id={c.id}
                        count={c.count}
                        increament={increament}
                        decreament={decreament} ></Counter>


                )
            }

            <Statas count={totalCount()} />
        </div>
    );
}
