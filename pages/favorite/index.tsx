import { motion } from "framer-motion";
import FavCard from "../../components/Favorite/fav-card";
import FilterController from "../../components/Recepie/filter-controller";
import { useRecoilState } from "recoil";
import { favListState } from "../../state/fav.atom";

interface FavPageProps {
  recepies: Array<{
    header: string;
    body: string;
    src: string;
  }>;
}

const FavoritePage = ({ recepies }: FavPageProps) => {
  const [favs, setFavs] = useRecoilState(favListState);
  return (
    <>
      {" "}
      <motion.div
        style={{ opacity: 0 }}
        className="bg-white p-4 text-2xl fixed z-50 w-screen"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-2xl text-center font-medium">Favorite Recepies</h1>
        <FilterController />
      </motion.div>
      <div className="mt-40 px-4 mb-20">
        {Array.from(favs).map((header) => {
          const target = recepies.find((m) => header === m.header);
          return (
            <FavCard
              key={header}
              onDelete={() => {
                setFavs((olds) => {
                  olds.delete(target.header);
                  return new Set(olds);
                });
              }}
              body={target.body}
              header={target.header}
              src={target.src}
            />
          );
        })}
      </div>
    </>
  );
};

export default FavoritePage;
export async function getServerSideProps(): Promise<{ props: FavPageProps }> {
  return {
    props: {
      recepies: [
        {
          header: "Fruit salad mix",
          body: "Delics Fruit salad, Ngasem",
          src:
            "https://s3-alpha-sig.figma.com/img/0a70/297f/80ad7d9975f85c23558a755f6128ef5d?Expires=1605484800&Signature=Lw~N3DGQXr4bc9aI8IaT65GMI6n~9WKsuRdG0qfl9WIHRHdPp0Bo0qpQZtQAg2VZO2P8bFtsXBMhdBPnxQtT5c~zDbny7dPnSvJTPhtfokFjZzwWC7uQDoaWSC-sB1DxLSC91G8tUQWdXv~OB4kj3qe2d5ro1KGhXDlsVYdoH-rnS5FLf2nC8~OyRHhBSrPmaApysm1SzXQiEiEUx7PSUup82p20ylsm9ls2mpljqpBkGlBDgtnkRGCSA8cg4jD1Qpj94p1a0gBH7rbKxkrITp7RBr6yi1~dIFCo8hjIiW0qdfLZCiAYyNjGbsAFBfWDcbY1sU5Y6TKhZsgmNNwWWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
          header: "Bakso jumbo",
          body: "Bakso pak ndut, Dlopo",
          src:
            "https://s3-alpha-sig.figma.com/img/ba95/7ae4/19bc1954bc477640abb1f855c9085871?Expires=1605484800&Signature=CDBQZjDG~SDufyKOkLlOWlremDUVpKC2yyNx-pvoxW1Cv0uiFAA4suS8xt1S~9gERg6Mrf7D99ajRZSG09wUue4MndnCGuOvbDb8KY~tIMJdgr2eFgj6mH9IA9pPD6yFeSJ0qQCM7BEBRuDw0FCWfH8s0iZWyw4VXUnkwyR0x8wzEtRunz7pTMuYndhYLKbu3w7ldqa~gH9vZAI2FsVSG6DIIOndMwmnQYOFbEAO1RvMLw-3eQc1ssjkhkdNCQp~1hcdf~T3MMJvdX44La6BY1kcNNAM~y~JJJJq5ZPafYda6CEcBewxG-2-TuvFT0ZW5SGD32PGUkB4bYFccDjYfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
          header: "Chicken  : )",
          body: "Chicken, Mackerel, Bone",
          src:
            "https://s3-alpha-sig.figma.com/img/a4d5/a200/7d34b3a73a59341e030d6a19eed38824?Expires=1605484800&Signature=Ayc6gsoTTKnMb-LWTHDC3Jxyv9D8dXoqRzCQsWIUrHIEjWxHofSleinW831CjJgZzJUGAPSn8C2WQFyTeMPqcqyxwhzinhBxZmmk64MJyUYFzsVdF5LygwmOV50NF6FN3o8xcwtdXcUVOyd8WtlCb~HLiJv-xd2VMhbirbfJ--jeqnXb6uVsbQk9FKhiHGnXHm0rbvct0ogsOkKn-zkULAvTJN0ayDiiaJwG9r7dR~6VBVqy8jImEMdA4-RtI5Vd-oKBwKAIFVu0VqzMnvsuRmiCyEN3-oa6vlGBY7Vp9EmS0aSp4-sNeMbK8YvrYGjLsh14-cM8SjV3y-JbGrYuTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
          header: "Frozen Kefir",
          body: "Frozen Kefi, Honey Liver, ...",
          src:
            "https://s3-alpha-sig.figma.com/img/4cd1/12e7/c8e25d177fc5a41891ac47622d9fc1cd?Expires=1605484800&Signature=ItW~oGx~FJFPBqPYyiu4gq4EpWLHfIuaU11VFSRKsUNSS9O9JuiQW4gXyotOmSZWk3JBgaNBOriaT7MZ7vvHDzQdx8qJkBYahwP-e-lpEIc92pUw0IGhQcG-TyHl~iqgwUzk4N-1C7Wy-lNa07zjr4j-Jx72klMrD9zW8OaoLqvcXpy0OR2VU8Y7NLTHx~sgz-ht4N-DkYpPWxfq3s~JkRih6ohm74rLzgI4l-VLC7DYrrJG8EYcZgk5id003MQdjPAQERb7JWTS00h3E5jLltVe1hawORFc6cWdqGPgTTRTKaO4Kp8JVK4Vg8LsLND1qnf2XLbtlvg-llHPQDERdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
          header: "Bone Marrow",
          body: "Highly nutritious",
          src:
            "https://s3-alpha-sig.figma.com/img/cb36/2d22/37b26ac7d2037eca6ce5050a30115349?Expires=1605484800&Signature=ByPV5AQv-ROmsSncif4yMwS7aiw0ogLeGJqao2BklkY6Pke6MhorQ2X~selyITfhIz4J8JUecN1GHzpEW-e9yW-k69xqdfkr~0h1iHnPAhmxpBj5Lfv2ch5U~TOQU3fMdSiUZ4Zr66w7bosqQDBJWj4NQd0sJv48Nbc-BwNw8SNg1oF3Cs1bS333GVEFqZT0-KNIuK7ETA-4imaqiTkwqCp9II2u78Fcl9VguEh8OaedEjIowIn7oeG8XkNkqelvbti2pPodcC5W7OOCsnC2Ps~dGmb-MvchfwnN47sB5JCMVoJIOA8prQ~VV30KIOKvXmm6yO55eqyaDrWbA1Mg9Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
      ],
    },
  };
}
