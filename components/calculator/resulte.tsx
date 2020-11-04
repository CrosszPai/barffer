import { transform } from "framer-motion";
import { FaUndo } from "react-icons/fa";

const Result = ({ result, onReset, meals }) => {
  return (
    <div className="mt-24 text-center">
      <h2 className="text-4xl">Result</h2>
      <h4 className="text-xl mt-16">Grams per meal</h4>
      <h2 className="text-4xl font-light mt-2">{result}</h2>
      <h4 className="text-xl mt-16">Grams per meal</h4>
      <h2 className="text-4xl font-light mt-2">{meals}</h2>
      <button
        onClick={onReset}
        className="bg-barffer-text text-white p-4 rounded-md w-24 flex absolute "
        style={{
          bottom: "5rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <FaUndo className="m-auto" />
      </button>
    </div>
  );
};
export default Result;
