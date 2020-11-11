import React from "react";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { FaHeart, FaMicrosoft, FaRegHeart } from "react-icons/fa";
import styles from "./index.module.css";
import { useRecoilState } from "recoil";
import { favListState } from "../../state/fav.atom";
const RecepieContent = () => {
  return (
    <>
      <div className="w-screen px-4 mb-20" style={{ marginTop: "8.875rem" }}>
        {[0, 1].map((v) => {
          return <Card key={v} />;
        })}
      </div>
    </>
  );
};

export default RecepieContent;

const Card = () => {
  const Router = useRouter();
  const [fav1, setFav1] = React.useState(false);
  const [fav2, setFav2] = React.useState(false);
  const [favs, setFavs] = useRecoilState(favListState);
  return (
    <div className="rounded bg-white p-4 my-6">
      <h1 className="font-semibold">Delics Fruit Salad</h1>
      <p className="text-xs font-light">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>
      <hr className="border-t-4 my-2" style={{ borderColor: "#EFEFF2" }} />
      <div
        className="flex my-2">
        <Image
          onClick={(e) => {
            sessionStorage.setItem('data', JSON.stringify({
              header: "Fruit salad mix",
              body: "Lorem ipsum dolor sit amet",
              src: "https://s3-alpha-sig.figma.com/img/ba95/7ae4/19bc1954bc477640abb1f855c9085871?Expires=1605484800&Signature=CDBQZjDG~SDufyKOkLlOWlremDUVpKC2yyNx-pvoxW1Cv0uiFAA4suS8xt1S~9gERg6Mrf7D99ajRZSG09wUue4MndnCGuOvbDb8KY~tIMJdgr2eFgj6mH9IA9pPD6yFeSJ0qQCM7BEBRuDw0FCWfH8s0iZWyw4VXUnkwyR0x8wzEtRunz7pTMuYndhYLKbu3w7ldqa~gH9vZAI2FsVSG6DIIOndMwmnQYOFbEAO1RvMLw-3eQc1ssjkhkdNCQp~1hcdf~T3MMJvdX44La6BY1kcNNAM~y~JJJJq5ZPafYda6CEcBewxG-2-TuvFT0ZW5SGD32PGUkB4bYFccDjYfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }));
            Router.push(`/recepie/${Math.floor(Math.random() * 10)}`);
          }}
          className="rounded"
          width={82}
          height={82}
          src="https://s3-alpha-sig.figma.com/img/ba95/7ae4/19bc1954bc477640abb1f855c9085871?Expires=1605484800&Signature=CDBQZjDG~SDufyKOkLlOWlremDUVpKC2yyNx-pvoxW1Cv0uiFAA4suS8xt1S~9gERg6Mrf7D99ajRZSG09wUue4MndnCGuOvbDb8KY~tIMJdgr2eFgj6mH9IA9pPD6yFeSJ0qQCM7BEBRuDw0FCWfH8s0iZWyw4VXUnkwyR0x8wzEtRunz7pTMuYndhYLKbu3w7ldqa~gH9vZAI2FsVSG6DIIOndMwmnQYOFbEAO1RvMLw-3eQc1ssjkhkdNCQp~1hcdf~T3MMJvdX44La6BY1kcNNAM~y~JJJJq5ZPafYda6CEcBewxG-2-TuvFT0ZW5SGD32PGUkB4bYFccDjYfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <div className="ml-2 relative flex-1">
          <h4 onClick={(e) => {
            sessionStorage.setItem('data', JSON.stringify({
              header: "Bakso jumbo",
              body: "Lorem ipsum dolor sit amet",
              src: "https://s3-alpha-sig.figma.com/img/ba95/7ae4/19bc1954bc477640abb1f855c9085871?Expires=1605484800&Signature=CDBQZjDG~SDufyKOkLlOWlremDUVpKC2yyNx-pvoxW1Cv0uiFAA4suS8xt1S~9gERg6Mrf7D99ajRZSG09wUue4MndnCGuOvbDb8KY~tIMJdgr2eFgj6mH9IA9pPD6yFeSJ0qQCM7BEBRuDw0FCWfH8s0iZWyw4VXUnkwyR0x8wzEtRunz7pTMuYndhYLKbu3w7ldqa~gH9vZAI2FsVSG6DIIOndMwmnQYOFbEAO1RvMLw-3eQc1ssjkhkdNCQp~1hcdf~T3MMJvdX44La6BY1kcNNAM~y~JJJJq5ZPafYda6CEcBewxG-2-TuvFT0ZW5SGD32PGUkB4bYFccDjYfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }));
            Router.push(`/recepie/${Math.floor(Math.random() * 10)}`);
          }}
            className="font-medium text-base">Bakso jumbo</h4>
          <p className="font-light text-sm">Lorem ipsum dolor sit amet</p>
          <button
            onClick={() => {
              setFavs((fav) => {
                if (fav.has("Bakso jumbo")) {
                  fav.delete("Bakso jumbo");
                } else[fav.add("Bakso jumbo")];
                console.log(fav);
  
                return new Set(fav);
              })
              setFav1((v) => !v)}}
            className={styles["fav-btn"]}
          >
            {fav1 ? (
              <FaHeart size="1rem" color="red" />
            ) : (
                <FaRegHeart size="1rem" />
              )}
          </button>
          <div className="mt-2 text-xs font-light flex items-center">
            <div
              className="bg-orange-400 p-1 mr-2 rounded-full"
              style={{ width: "fit-content" }}
            >
              <FaMicrosoft color="white" />
            </div>
            Meats , Salmon , ...
          </div>
        </div>
      </div>
      <div
        className="flex my-2 mb-2 relative">
        <Image
          onClick={(e) => {
            sessionStorage.setItem('data', JSON.stringify({
              header: "Fruit salad mix",
              body: "Lorem ipsum dolor sit amet",
              src: "https://s3-alpha-sig.figma.com/img/4cd1/12e7/c8e25d177fc5a41891ac47622d9fc1cd?Expires=1605484800&Signature=ItW~oGx~FJFPBqPYyiu4gq4EpWLHfIuaU11VFSRKsUNSS9O9JuiQW4gXyotOmSZWk3JBgaNBOriaT7MZ7vvHDzQdx8qJkBYahwP-e-lpEIc92pUw0IGhQcG-TyHl~iqgwUzk4N-1C7Wy-lNa07zjr4j-Jx72klMrD9zW8OaoLqvcXpy0OR2VU8Y7NLTHx~sgz-ht4N-DkYpPWxfq3s~JkRih6ohm74rLzgI4l-VLC7DYrrJG8EYcZgk5id003MQdjPAQERb7JWTS00h3E5jLltVe1hawORFc6cWdqGPgTTRTKaO4Kp8JVK4Vg8LsLND1qnf2XLbtlvg-llHPQDERdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }));
            Router.push(`/recepie/${Math.floor(Math.random() * 10)}`);
          }}
          className="rounded"
          width={82}
          height={82}
          src="https://s3-alpha-sig.figma.com/img/4cd1/12e7/c8e25d177fc5a41891ac47622d9fc1cd?Expires=1605484800&Signature=ItW~oGx~FJFPBqPYyiu4gq4EpWLHfIuaU11VFSRKsUNSS9O9JuiQW4gXyotOmSZWk3JBgaNBOriaT7MZ7vvHDzQdx8qJkBYahwP-e-lpEIc92pUw0IGhQcG-TyHl~iqgwUzk4N-1C7Wy-lNa07zjr4j-Jx72klMrD9zW8OaoLqvcXpy0OR2VU8Y7NLTHx~sgz-ht4N-DkYpPWxfq3s~JkRih6ohm74rLzgI4l-VLC7DYrrJG8EYcZgk5id003MQdjPAQERb7JWTS00h3E5jLltVe1hawORFc6cWdqGPgTTRTKaO4Kp8JVK4Vg8LsLND1qnf2XLbtlvg-llHPQDERdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <div className="ml-2 relative flex-1">
          <h4 onClick={(e) => {
            sessionStorage.setItem('data', JSON.stringify({
              header: "Frozen Kefir",
              body: "Lorem ipsum dolor sit amet",
              src: "https://s3-alpha-sig.figma.com/img/4cd1/12e7/c8e25d177fc5a41891ac47622d9fc1cd?Expires=1605484800&Signature=ItW~oGx~FJFPBqPYyiu4gq4EpWLHfIuaU11VFSRKsUNSS9O9JuiQW4gXyotOmSZWk3JBgaNBOriaT7MZ7vvHDzQdx8qJkBYahwP-e-lpEIc92pUw0IGhQcG-TyHl~iqgwUzk4N-1C7Wy-lNa07zjr4j-Jx72klMrD9zW8OaoLqvcXpy0OR2VU8Y7NLTHx~sgz-ht4N-DkYpPWxfq3s~JkRih6ohm74rLzgI4l-VLC7DYrrJG8EYcZgk5id003MQdjPAQERb7JWTS00h3E5jLltVe1hawORFc6cWdqGPgTTRTKaO4Kp8JVK4Vg8LsLND1qnf2XLbtlvg-llHPQDERdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }));
            Router.push(`/recepie/${Math.floor(Math.random() * 10)}`);
          }} className="font-medium text-base">Frozen Kefir</h4>
          <p className="font-light text-sm">Lorem ipsum dolor sit amet</p>
          <button
            onClick={() => {
              setFavs((fav) => {
                if (fav.has("Frozen Kefir")) {
                  fav.delete("Frozen Kefir");
                } else[fav.add("Frozen Kefir")];
                console.log(fav);

                return new Set(fav);
              })
              setFav2((v) => !v)
            }}
            className={styles["fav-btn"]}
          >
            {fav2 ? (
              <FaHeart size="1rem" color="red" />
            ) : (
                <FaRegHeart size="1rem" />
              )}
          </button>
          <div className="mt-2 text-xs font-light flex items-center">
            <div
              className="bg-orange-400 p-1 mr-2 rounded-full"
              style={{ width: "fit-content" }}
            >
              <FaMicrosoft color="white" />
            </div>
            Meats , Salmon , ...
          </div>
        </div>
      </div>
    </div>
  );
};
