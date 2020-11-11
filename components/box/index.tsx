import { FaArrowRight, FaHeart, FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import React from "react";

interface BoxProps {
  src: string;
  header: string;
  body: string;
  onFav: () => void;
  isFav: boolean;
  onClick: () => void
}

const Box = ({ src, body, header, onFav, isFav, onClick }: BoxProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles["box"]}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <button onClick={onFav} className={styles["fav"]}>
        {isFav ? <FaHeart color="red" /> : <FaRegHeart />}
      </button>
      <div className="p-2 mt-auto bg-white mb-2 mx-4 rounded relative">
        <h6 className="font-popins font-semibold">{header}</h6>
        <p className="text-xs font-light">{body}</p>
        <div className="h-6"></div>
        <div
          onClick={onClick}
          className="absolute bottom-0 right-0 p-1 transform -translate-x-1 -translate-y-1 rounded"
          style={{
            background: "#EDA345",
            width: "fit-content",
            minWidth: "1.5rem",
          }}
        >
          <FaArrowRight color="white" />
        </div>
      </div>
    </motion.div>
  );
};
export default Box;
