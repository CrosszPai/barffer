import { motion } from "framer-motion";
import Calculate from "../components/calculator/culculate";
import React from "react";
import Result from "../components/calculator/resulte";

const CalculatorPage = () => {
  const [result, setResult] = React.useState<number>(null);
  const [meal, setMeal] = React.useState<number>(null);
  return (
    <>
      <motion.div
        style={{ opacity: 0 }}
        className="bg-white p-4 text-2xl fixed z-50 w-screen"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-2xl text-center font-medium">Calculator</h1>
      </motion.div>
      {result !== null ? (
        <Result
          result={result}
          onReset={() => {
            setResult(null);
          }}
          meals={Math.round(result / meal)}
        />
      ) : (
        <Calculate
          onCalculate={(val: number) => {
            setResult(val);
          }}
          onMealChange={(val: number) => {
            setMeal(val);
          }}
        />
      )}
    </>
  );
};
export default CalculatorPage;
