import { BiArrowBack } from "react-icons/bi";

interface ProductsProps{
    title:string;
    subTitle:string;
    link:string;
}
const Products: React.FC<ProductsProps> = ({ title,subTitle, link }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2 lg:gap-3">
                <h1 className="text-xl lg:text-2xl">{title}</h1>
                <h2>{subTitle}</h2>
            </div>            
            <div className="w-8 h-8  rounded-full flex items-center justify-center bg-[rgba(230,_62,_33,_1)] hover:bg-[rgba(228,_100,_63,_1)] shadow-[inset_0px_3px_0px_rgba(228,100,63,1),0px_4px_12.7px_rgba(230,62,33,0.18)] border-[2px_solid_rgba(0,_0,_0,_1)]"> <a href={link} className="rotate-[160deg]"><BiArrowBack size={24} color="white" /></a></div>

        </div>
    );
}

export default Products
