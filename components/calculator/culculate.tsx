import React from "react";

const Calculate = ({ onCalculate, onMealChange }) => {
  const [weight, setWeight] = React.useState<number>(1);
  const [ages, setAges] = React.useState<number>(1);
  const [meal, setMeal] = React.useState(1);
  const [mode, setMode] = React.useState<1 | 2 | 3>(1);
  React.useEffect(() => {
    onMealChange(meal);
  }, [meal]);
  return (
    <>
      <div className="rounded-xl bg-white p-4 mt-20 mx-6 flex flex-col">
        <div className="flex mb-4">
          <h6 className="font-medium">Weight</h6>
          <p className="font-light ml-auto">{weight} Kg.</p>
        </div>
        <input
          type="range"
          min="1"
          max="25"
          step="1"
          value={weight}
          onChange={(e) => setWeight(parseInt(e.target.value))}
        ></input>
        <div className="flex mt-12 mb-4">
          <h6 className="font-medium">Age</h6>
          <p className="font-light ml-auto">
            {ages > 12 ? "> 1 Year." : `${ages} M.`}
          </p>
        </div>
        <input
          type="range"
          min="1"
          max="13"
          step="1"
          value={ages}
          onChange={(e) => setAges(parseInt(e.target.value))}
        ></input>
        <div className="flex mt-12 mb-4">
          <h6 className="font-medium">Meal per day</h6>
          <p className="font-light ml-auto">{meal}</p>
        </div>
        <input
          type="range"
          min="1"
          max="4"
          step="1"
          value={meal}
          onChange={(e) => setMeal(parseInt(e.target.value))}
        ></input>
        <div className="flex justify-between mt-12">
          <button
            onClick={() => {
              setMode(1);
            }}
            className={
              mode === 1
                ? "p-2 flex-1 bg-black text-white rounded-lg mx-4"
                : "p-2 flex-1 bg-white border text-black rounded-lg mx-4 border-black"
            }
          >
            normal
          </button>
          <button
            onClick={() => {
              setMode(2);
            }}
            className={
              mode === 2
                ? "p-2 flex-1 bg-black text-white rounded-lg mx-4"
                : "p-2 flex-1 bg-white border text-black rounded-lg mx-4 border-black"
            }
          >
            +weight
          </button>
          <button
            onClick={() => {
              setMode(3);
            }}
            className={
              mode === 3
                ? "p-2 flex-1 bg-black text-white rounded-lg mx-4"
                : "p-2 flex-1 bg-white border text-black rounded-lg mx-4 border-black"
            }
          >
            -weight
          </button>
        </div>
      </div>
      <div className="w-screen text-center mt-4">
        <button
          onClick={() => {
            onCalculate(Math.round(Math.random() * 100));
          }}
          className="bg-barffer-text text-white p-4 rounded-md"
        >
          Calculate
        </button>
      </div>
    </>
  );
};
export default Calculate;
