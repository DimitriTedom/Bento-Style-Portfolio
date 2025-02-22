interface Props{
    Title:string;
    SubTitle:string;
    TitleColor?:string;
    from:string;
    to:string;
}
const RecentWorks : Props[] = [
    {   Title: "Product designer",
        SubTitle : "Figma",
        TitleColor: "rgba(243, 80, 52, 1)",
        from: "2021",
        to:"Present"
    },
    {   Title: "UI/UX designer",
        SubTitle : "Google",
        from: "2021",
        to:"Present"
    },
    {   Title: "Product designer",
        SubTitle : "Figma",
        from: "2021",
        to:"Present"
    },
    {   Title: "Product designer",
        SubTitle : "Figma",
        from: "2021",
        to:"Present"
    },
]
const RecentWork = () => {
  return (
    <div className="space-y-6">
    {  RecentWorks.map((recent,index)=>(
                    <div className="flex justify-between w-full items-center" key={index}>
                    <div className="flex flex-col gap-2">
                        <h1 className={`lg:text-2xl font-semibold`} style={{color:recent.TitleColor}}>{recent.Title}</h1>
                        <div className="flex gap-1 lg:text-lg"><h2>{recent.from}</h2>-<h3>{recent.to}</h3></div>
                    </div>
                    <h2 className="lg:text-lg">{recent.SubTitle}</h2>
              </div>
    ))}
 
    </div>

  )
}

export default RecentWork