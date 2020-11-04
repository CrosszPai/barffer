import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { FaChevronLeft, FaDog, FaRegCheckCircle, FaRegHeart } from "react-icons/fa"
import styles from './index.module.css'

const RecepieDetail = () => {
    const Router = useRouter()
    return <>
        <motion.div animate={{ opacity: 1 }} transition={{ duration: 0.2 }}
        className={styles['header']}
            style={{ opacity: 0 }}>
            <div style={{
            }} className="w-screen px-4 pt-4">
                <div className="flex">
                    <button onClick={() => { Router.push('/recepie') }} className="rounded-full bg-white shadow-md p-2">
                        <FaChevronLeft />
                    </button>
                    <button className="ml-auto rounded-full bg-white shadow-md p-2">
                        <FaRegHeart />
                    </button>
                </div>
                <div className="p-8 bg-white mt-40 text-center rounded-xl">
                    <h6 className="font-medium text-lg">
                        Delics Fruit Salad
                    </h6>
                    <p className="font-light text-base mt-2">
                        Lorem ipsum dolor sit amet,Loreme<br />
                        sit amet,Loreme
                    </p>
                    <div className="mt-8 flex items-center justify-center font-light" >
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
                    <button>
                        Material
                    </button>
                    <button>
                        Info
                    </button>
                    <button>
                        Banefit
                    </button>
                </div>
                <div className="mt-6">
                    <p>Chicken Meat <span className="float-right">87 %</span></p>
                    <p>Fruits & Vegetables <span className="float-right">10 %</span></p>
                    <p>Egg <span className="float-right">3 %</span></p>
                </div>
            </div>
        </motion.div>
    </>
}

export default RecepieDetail