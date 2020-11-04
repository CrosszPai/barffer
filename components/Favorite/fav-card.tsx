import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { FaMicrosoft, FaTrash } from "react-icons/fa";

interface FavCardProps {
  header: string;
  body: string;
  src: string;
  onDelete: () => void;
  key: any;
}

const FavCard = ({ header, body, src, onDelete, key }:FavCardProps) => {
  const animated = useAnimation();
  return (
    <motion.div
      key={key}
      animate={animated}
      className="bg-white rounded p-4 my-2 flex"
    >
      <Image width={82} height={82} className="rounded-xl" src={src}></Image>
      <div className="flex-1 relative ml-4">
        <h4 className="font-medium">{header}</h4>
        <p className="font-light">{body}</p>
        <div className="mt-2 text-xs font-light flex items-center">
          <div
            className="bg-orange-400 p-1 mr-2 rounded-full"
            style={{ width: "fit-content" }}
          >
            <FaMicrosoft color="white" />
          </div>
          Meats , Salmon , ...
        </div>
        <button className="absolute top-0 right-0 p-2 rounded-full shadow-md">
          <FaTrash
            onClick={async () => {
              await animated.start({
                opacity: 0,
                y: -20,
              });
              onDelete();
            }}
          />
        </button>
      </div>
    </motion.div>
  );
};

export default FavCard;
