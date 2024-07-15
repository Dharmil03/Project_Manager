import { Navbar } from "./_components/Navbar";

const MarketingPage=({children}:{children:React.ReactNode})=>{
    return(
        <div className="h-full bg-slate-100">
            <Navbar></Navbar>
            <main className="pt-48 pb-20 bg-slate-100">
                 {children}
            </main> 
        </div>
    )
}

export default MarketingPage;