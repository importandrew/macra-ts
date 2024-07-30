import {useQuery} from '@tanstack/react-query';
import { Spinner } from '@nextui-org/react';


interface NameScore {
    name: string,
    score: number
}

interface RenderGameProps {
    round: string,
    left: NameScore,
    right: NameScore,
    opp: NameScore,
    me: NameScore
}


export default function Now() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['now'],
        queryFn: async () => {
            const url = '/now'
            const response = await fetch(import.meta.env.VITE_API_ADDR + url)
            if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText} while processing URL ${url}`)
            }
            return response.json()
        },
    })
    if (isPending) {
        return (
        <div className="flex flex-col h-screen w-screen my-auto justify-center items-center">
            <Spinner label="Loading..." size="lg" />
        </div>
    )}

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    if (data.hasOwnProperty("errorText")) {
        return <span>Error: {data.errorText}</span>
    }
      
    // const data = {
    //     round: "East 4",
    //     left: {
    //         name: "Васильев Сергей",
    //         score: 150,
    //     },
    //     right: {
    //         name: "Дашкова Анна",
    //         score: -150,
    //     },
    //     opp: {
    //         name: "Лавренюк Ирина",
    //         score: 200,
    //     },
    //     me: {
    //         name: "Климов Андрей",
    //         score: -200,
    //     },
    // }

    return (
        <div className="flex h-screen w-screen">
            <div className="grid w-screen grid-cols-[20%,60%,20%] grid-rows-[20%,60%,20%] text-center"> 
                <div></div> 
                <div className="self-center rotate-180">
                    {data.opp.name}
                    <br></br>
                    {data.opp.score}
                </div> 
                <div></div>  
                <div className="self-center rotate-90">
                    {data.left.name}
                    <br></br>
                    {data.left.score}
                </div> 
                <div className="self-center text-5xl">
                    {data.round}
                </div>  
                <div className="self-center -rotate-90">
                    {data.right.name}
                    <br></br>
                    {data.right.score}
                </div> 
                <div></div> 
                <div className="self-center">
                    {data.me.name}
                    <br></br>
                    {data.me.score}
                </div> 
                <div></div> 
            </div>
        </div>
    );
}