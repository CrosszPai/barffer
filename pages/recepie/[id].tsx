import { motion } from "framer-motion";
import { useRouter } from "next/router";
import {
  FaChevronLeft,
  FaDog,
  FaHeart,
  FaRegCheckCircle,
  FaRegHeart,
} from "react-icons/fa";
import styles from "./index.module.css";
import React from "react";
import { favListState } from "../../state/fav.atom";
import { useRecoilState } from "recoil";

const RecepieDetail = () => {
  const Router = useRouter();
  const [initData, setInitData] = React.useState(null)
  const [state, setState] = React.useState<"mat" | "info" | "bane">("mat");
  const [favs, setFavs] = useRecoilState(favListState);
  React.useEffect(() => {
    if (sessionStorage.getItem('data')) {
      setInitData(JSON.parse(sessionStorage.getItem('data')))
    }
    return () => {
      sessionStorage.clear()
    }
  }, [])
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={styles["header"]}
        style={{
          opacity: 0,
          backgroundImage: `url(${initData?.src || 'https://s3-alpha-sig.figma.com/img/ba95/7ae4/19bc1954bc477640abb1f855c9085871?Expires=1605484800&Signature=CDBQZjDG~SDufyKOkLlOWlremDUVpKC2yyNx-pvoxW1Cv0uiFAA4suS8xt1S~9gERg6Mrf7D99ajRZSG09wUue4MndnCGuOvbDb8KY~tIMJdgr2eFgj6mH9IA9pPD6yFeSJ0qQCM7BEBRuDw0FCWfH8s0iZWyw4VXUnkwyR0x8wzEtRunz7pTMuYndhYLKbu3w7ldqa~gH9vZAI2FsVSG6DIIOndMwmnQYOFbEAO1RvMLw-3eQc1ssjkhkdNCQp~1hcdf~T3MMJvdX44La6BY1kcNNAM~y~JJJJq5ZPafYda6CEcBewxG-2-TuvFT0ZW5SGD32PGUkB4bYFccDjYfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'})`
        }}
      >
        <div style={{}} className="w-screen px-4 pt-4">
          <div className="flex">
            <button
              onClick={() => {
                Router.back();
              }}
              className="rounded-full bg-white shadow-md p-2"
            >
              <FaChevronLeft />
            </button>
            <button onClick={() => {
              if (initData) {
                setFavs((fav) => {
                  if (fav.has(initData.header)) {
                    fav.delete(initData.header);
                  } else[fav.add(initData.header)];
                  console.log(fav);

                  return new Set(fav);
                })
              }
            }} className="ml-auto rounded-full bg-white shadow-md p-2 focus:outline-none">
              {favs.has(initData?.header) ? <FaHeart color="red" /> : <FaRegHeart />}
            </button>
          </div>
          <div className="p-8 bg-white mt-40 text-center rounded-xl">
            <h6 className="font-medium text-lg">{initData?.header || "Delics Fruit Salad"}</h6>
            <p className="font-light text-base mt-2">
              {initData?.body || 'Lorem ipsum dolor sit amet,Loreme'}
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
              className={state === "mat" ? "font-medium" : ""}
              onClick={() => {
                setState("mat");
              }}
            >
              Material
            </button>
            <button
              className={state === "info" ? "font-medium" : ""}
              onClick={() => {
                setState("info");
              }}
            >
              Info
            </button>
            <button
              className={state === "bane" ? "font-medium" : ""}
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
