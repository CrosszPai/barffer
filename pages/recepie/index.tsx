import FilterController from "../../components/Recepie/filter-controller";
import RecepieContent from "../../components/Recepie/recepie-content";

export default function RecepiePage() {
    return <>
        <div className="bg-white p-4 text-2xl fixed z-50 w-screen">
            <h1 className="text-2xl text-center font-medium">
                Recepies
            </h1>
            <FilterController />
        </div>
        <RecepieContent />
    </>
}