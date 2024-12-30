interface Ihead{
    heading: string,
    para:string,
    style?:string
}
export default function Headings(props:Ihead){
    return(
        <div className={props.style}>
        <h1 className="text-[#7dd163] mt-28 text-2xl text-center font-mono font-semibold">
      {props.heading}
        </h1>
        <p className="text-white mt-2 text-lg md:text-xl text-center font-mono">
      {props.para}
        </p>
        </div>
    )
}