import Link from "next/link"

export const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-[#880808]">
            <Link href='/game'>
            <button className="bg-[#4169E1] hover:bg-[#6495ED] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-white">Click to Invite player 2 </button>
            </Link>
        </div>
    )
}