import { useEffect } from "react";
import { useMetamask } from "@thirdweb-dev/react";
import Head from "next/head";

export const Login = () => {
    const connectWallet = useMetamask();



    return (

       
    
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-[#880808]">
            <p className="pb-10 text-[2.5rem] font-bold text-white">Rock Paper Scissor Lizard Spock</p>
            <p className="pb-20 text-[1.5rem]">✊{""} ✋ {""} ✌️ {" "} 🤌 {" "} 🖖</p>
            <button className="bg-[#4169E1] hover:bg-[#6495ED] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-white"
            onClick={connectWallet}>
                Connect to MetaMask 🦊
            </button>

            
            

           
        </div>
        
    )
}