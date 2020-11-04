import { motion } from "framer-motion";
import { useRouter } from "next/router";
import {
  FaChevronLeft,
  FaDog,
  FaRegCheckCircle,
  FaRegHeart,
} from "react-icons/fa";
import styles from "./index.module.css";
import React from "react";

const RecepieDetail = () => {
  const Router = useRouter();
  const [state, setState] = React.useState<"mat" | "info" | "bane">("mat");
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={styles["header"]}
        style={{ opacity: 0 }}
      >
        <div style={{}} className="w-screen px-4 pt-4">
          <div className="flex">
            <button
              onClick={() => {
                Router.push("/recepie");
              }}
              className="rounded-full bg-white shadow-md p-2"
            >
              <FaChevronLeft />
            </button>
            <button className="ml-auto rounded-full bg-white shadow-md p-2">
              <FaRegHeart />
            </button>
          </div>
          <div className="p-8 bg-white mt-40 text-center rounded-xl">
            <h6 className="font-medium text-lg">Delics Fruit Salad</h6>
            <p className="font-light text-base mt-2">
              Lorem ipsum dolor sit amet,Loreme
              <br />
              sit amet,Loreme
            </p>
            <div className="mt-8 flex items-center justify-center font-light">
              <button className="font-light outline-none flex text-base">
                <FaDog className="text-orange-400 mr-2" />
                Dog
              </button>
              <button className="ml-4 outline-none font-light flex text-base">
                <FaRegCheckCircle className="text-orange-400 mr-2" />
                Verify
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white flex-1 mt-4 p-4">
          <div className="flex mt-2 justify-between">
            <button
              className={state === "mat" && "font-medium"}
              onClick={() => {
                setState("mat");
              }}
            >
              Material
            </button>
            <button
              className={state === "info" && "font-medium"}
              onClick={() => {
                setState("info");
              }}
            >
              Info
            </button>
            <button
              className={state === "bane" && "font-medium"}
              onClick={() => {
                setState("bane");
              }}
            >
              Banefit
            </button>
          </div>
          {state === "mat" && (
            <div className="mt-6">
              <p>
                Chicken Meat <span className="float-right">87 %</span>
              </p>
              <p>
                Fruits & Vegetables <span className="float-right">10 %</span>
              </p>
              <p>
                Egg <span className="float-right">3 %</span>
              </p>
            </div>
          )}
          {state === "info" && (
            <div className="mt-6">
              <p>
                Whole Sardine with Duck Meat, Bone, Organs <br />
                <span className="font-medium">Vegetables</span> : Broccoli,
                Bitter Melon, Celery, Carrot, Green Peas, Kale, Spinach <br />
                <span className="font-medium">Fruits </span>: Apple, Berries,
                Cantaloupe, Cucumber, Kiwi, Papaya, Pumpkin <br />
                <span className="font-medium">Supplements</span>: Apple Cider
                Vinegar, Olive Oil, Coconut Oil, Flaxseed, Egg
              </p>
            </div>
          )}
          {state === "bane" && (
            <div className="mt-6">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unc
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default RecepieDetail;
