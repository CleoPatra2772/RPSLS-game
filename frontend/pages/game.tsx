const Game = () => {
return (
    <div className="flex flex-col  items-center h-screen w-screen bg-[#880808] pt-20 text-[1rem] font-bold text-white">
        <div className="flex flex-row space-x-10 ">
        <p>Player One: contract address ...</p>
        <p className="text-[1.5rem] text-yellow-400"> VS. </p>
        <p>{" "} Player Two: contract address ...</p>
        </div>

        <div className="flex flex-row pt-20">
            <p className="px-5">Place your bet: </p>
            <input type='number' placeholder="0.01 ETH" className="rounded-lg"></input>
            <div className="p-2"></div>
            <button type='submit' className="bg-yellow-400 hover:bg-yellow-200 p-[0.3rem] text-xl font-semibold rounded-lg cursor-pointer text-white">
                 Submit </button>

        </div>

        <div className="flex flex-col pt-20 items-center justify-between">
            <p className="px-5 text-[2.0rem]">Place your move ⇣</p>
            <div className="grid grid-cols-5 gap-6 p-10 text-[3rem] cursor-pointer">
            <div className="hover:scale-125">✊</div>
            <div className="hover:scale-125">✋</div>
            <div className="hover:scale-125">✌️ </div>
            <div className="hover:scale-125">🤌</div>
            <div className="hover:scale-125">🖖</div>

            </div>
            <button type='submit' className="bg-[#4169E1] hover:bg-[#6495ED] p-[0.5rem] text-xl font-semibold rounded-lg cursor-pointer text-white">
                 Submit </button>

        </div>
        
        
       
    </div>
)
}

export default Game;