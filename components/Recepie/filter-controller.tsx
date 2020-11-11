import { motion } from "framer-motion";
import React from "react";
import { FaCat, FaCheckDouble, FaDog, FaSlidersH } from "react-icons/fa";
import styles from "./index.module.css";

const FilterController = () => {
  const [current, setCurrent] = React.useState<"dog" | "cat" | "all">("dog");
  return (
    <div className={styles["filter-container"]}>
      <div>
        <FaSlidersH className="mr-2" />
        Filter
      </div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={current === "dog" ? styles["active"] : undefined}
        onClick={() => setCurrent("dog")}
      >
        <FaDog color={current === "dog" ? "white" : ""} className="mr-2" />
        Dog
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={current === "cat" ? styles["active"] : undefined}
        onClick={() => setCurrent("cat")}
      >
        <FaCat color={current === "cat" ? "white" : ""} className="mr-2" />
        Cat
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={current === "all" ? styles["active"] : undefined}
        onClick={() => setCurrent("all")}
      >
        <FaCheckDouble color={current === "all" ? "white" : ""} className="mr-2" />
        Alls
      </motion.button>
    </div>
  );
};

export default FilterController;
