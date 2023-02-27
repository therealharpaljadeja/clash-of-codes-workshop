import { Alfajores } from "@celo/rainbowkit-celo/chains";
import { useState } from "react";
import {
    useAccount,
    useContractEvent,
    useContractWrite,
    usePrepareContractWrite,
} from "wagmi";
import GuestbookAbi from "../abi/Guestbook";

export default function Home() {
    const { address } = useAccount();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<any>([]);

    const { config } = usePrepareContractWrite({
        abi: GuestbookAbi,
        address: "0x315116Af8409f0638aBa11193094D62F9a03fF59",
        functionName: "setMessage",
        args: [message],
        chainId: Alfajores.id,
    });

    const { data, isLoading, write } = useContractWrite({
        ...config,
        onSuccess: (data) => {
            console.log(data);
        },
    });

    useContractEvent({
        address: "0x315116Af8409f0638aBa11193094D62F9a03fF59",
        abi: GuestbookAbi,
        eventName: "GuestMessaged",
        listener(guest, message) {
            setMessages([...messages, { guest, message }]);
        },
    });

    // const { data: read } = useContractReads({
    //     contracts: [
    //         {
    //             address: "0x315116Af8409f0638aBa11193094D62F9a03fF59",
    //             abi: GuestbookAbi,
    //             functionName: "guestMessage",
    //             args: [address],
    //         },
    //     ],
    //     onSuccess(data) {
    //         console.log(data);
    //     },
    // });

    function handleInputChange({ target }: any) {
        setMessage(target.value);
    }

    return (
        <div className="flex items-center flex-col space-y-4">
            <h1 className="text-xl">Guestbook Contract</h1>
            <div className="bg-prosperity rounded-full px-4 py-2">
                <span>Leave message as: {address}</span>
            </div>
            <input
                onChange={handleInputChange}
                className="border-gray-300 border-2 w-[100%] py-2 px-4"
            />
            <button
                disabled={!write}
                onClick={write}
                className="bg-prosperity px-4 py-2 rounded-full"
            >
                Send Message
            </button>
            <div className="flex flex-col items-start w-[100%] !mt-10">
                <h2>Messages left by others</h2>
                <hr className="border-1 border-black w-[100%] mt-2" />
                <ul className="flex flex-col w-[100%] mt-5 space-y-4">
                    {messages.map((message: any) => (
                        <li className="flex justify-between w-[100%]">
                            <span>{message.guest}</span>
                            <span>{message.message}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
