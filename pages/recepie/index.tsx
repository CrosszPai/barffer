import { motion } from "framer-motion";
import FilterController from "../../components/Recepie/filter-controller";
import RecepieContent from "../../components/Recepie/recepie-content";

export default function RecepiePage() {
    return <>
        <motion.div style={{ opacity: 0 }}
            className="bg-white p-4 text-2xl fixed z-50 w-screen"
            animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
            <h1 className="text-2xl text-center font-medium">
                Recepies
            </h1>
            <FilterController />
        </motion.div>
        <RecepieContent />
    </>
}