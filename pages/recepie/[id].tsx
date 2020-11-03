import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { FaChevronLeft, FaDog, FaRegCheckCircle, FaRegHeart } from "react-icons/fa"

const RecepieDetail = () => {
    const Router = useRouter()
    return <>
        <img className="w-screen" style={{ transform: "translateY(-30%)", }} src="https://s3-alpha-sig.figma.com/img/ba95/7ae4/19bc1954bc477640abb1f855c9085871?Expires=1605484800&Signature=CDBQZjDG~SDufyKOkLlOWlremDUVpKC2yyNx-pvoxW1Cv0uiFAA4suS8xt1S~9gERg6Mrf7D99ajRZSG09wUue4MndnCGuOvbDb8KY~tIMJdgr2eFgj6mH9IA9pPD6yFeSJ0qQCM7BEBRuDw0FCWfH8s0iZWyw4VXUnkwyR0x8wzEtRunz7pTMuYndhYLKbu3w7ldqa~gH9vZAI2FsVSG6DIIOndMwmnQYOFbEAO1RvMLw-3eQc1ssjkhkdNCQp~1hcdf~T3MMJvdX44La6BY1kcNNAM~y~JJJJq5ZPafYda6CEcBewxG-2-TuvFT0ZW5SGD32PGUkB4bYFccDjYfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
        <motion.div animate={{ opacity: 1 }} transition={{ duration: 0.2 }}
            style={{ opacity: 0 }} className="fixed top-0 left-0 w-screen h-screen flex flex-col">
            <div className="w-screen px-4 mt-8">
                <div className="flex">
                    <button onClick={() => { Router.push('/recepie') }} className="rounded-full bg-white shadow-md p-2">
                        <FaChevronLeft />
                    </button>
                    <button className="ml-auto rounded-full bg-white shadow-md p-2">
                        <FaRegHeart />
                    </button>
                </div>
                <div className="p-8 bg-white mt-40 text-center">
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
                <div className="flex mt-2">
                    <button className="flex-1">
                        Material
                    </button>
                    <button className="flex-1">
                        Info
                    </button>
                    <button className="flex-1">
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