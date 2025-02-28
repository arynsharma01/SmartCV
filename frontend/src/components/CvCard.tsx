
interface Cvprops{
  FullName :string ,
  color: string , 
  domain : string, 
  description?:string 
}

const colorMap: Record<string, string> = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  orange: "bg-orange-500",
  teal: "bg-teal-500",
  cyan: "bg-cyan-500",
  indigo: "bg-indigo-500",
  lime: "bg-lime-500",
  emerald: "bg-emerald-500",
  violet: "bg-violet-500",
  fuchsia: "bg-fuchsia-500",
  rose: "bg-rose-500",
};
export default function CvCard({FullName,color,domain,description} :Cvprops) {

  console.log(colorMap[color]);
  

  return <>
    <div className="flex flex-col p-6 max-w-lg md:w-96 rounded-xl border border-black bg-gray-50 shadow-md  ">
  <div className="flex w-full items-center gap-4">

    <div className={`rounded-full rounded- ${colorMap[color] || "bg-gray-600"} min-h-16 min-w-16 flex items-center justify-center`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    </div>

    
    <div className="text-slate-700 text-lg font-semibold sm:text-base md:text-lg text-center md:text-left">
      {FullName}
    </div>
  </div>

  <div className="flex items-center justify-center pt-2 font-bold text-lg sm:text-base md:text-lg">
    {domain}
  </div>

  
  <div className="hidden lg:block text-center text-gray-700 p-2 sm:text-sm md:text-base">
    {description}
  </div>
</div>


    
  </>
}