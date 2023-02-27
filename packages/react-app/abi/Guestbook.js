const abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "guest",
                type: "address",
            },
            {
                indexed: false,
                internalType: "string",
                name: "message",
                type: "string",
            },
        ],
        name: "GuestMessaged",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "guestMessage",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "message",
                type: "string",
            },
        ],
        name: "setMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

export default abi;
