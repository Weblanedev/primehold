import Features from "@/components/Features";
import Services from "@/components/Services";

const page = () => {
    return (
        <div className="flex flex-col gap-16 md:gap-48  pt-[150px]">
            <Features />
            <Services />
            </div>
    )
}

export default page