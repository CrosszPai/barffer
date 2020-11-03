import React from 'react'
import SearchBox from "../components/search-box";
import Box from "../components/box";
import { motion } from "framer-motion";
interface HomePageProps {
  recepies: Array<{
    header: string,
    body: string,
    src: string
  }>
}

export default function HomePage({ recepies }: HomePageProps): JSX.Element {
  return (
    <motion.div style={{ opacity: 0 }}
      animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
      <SearchBox />
      <div className="mt-8 mx-4">
        <img className="w-full h-auto" src="/assets/img/branding.png" />
      </div>
      <div className="mt-8 mx-4 flex items-center text-barffer-text">
        <div className="font-popins text-2xl font-mediu" >
          Today’s recepie
        </div>
        <h6 className="ml-auto text-xs">
          See all
        </h6>
      </div>
      <div>
        <div className="mt-8 mx-4 flex overflow-auto">
          {recepies.map(r =>
            <Box key={r.src}
              {...r} />
          )}
        </div>
      </div>
    </motion.div>
  )
}

export async function getServerSideProps(): Promise<{ props: HomePageProps }> {
  return {
    props: {
      recepies: [
        {
          header: "Fruit salad mix",
          body: "Delics Fruit salad, Ngasem",
          src: "https://s3-alpha-sig.figma.com/img/0a70/297f/80ad7d9975f85c23558a755f6128ef5d?Expires=1605484800&Signature=Lw~N3DGQXr4bc9aI8IaT65GMI6n~9WKsuRdG0qfl9WIHRHdPp0Bo0qpQZtQAg2VZO2P8bFtsXBMhdBPnxQtT5c~zDbny7dPnSvJTPhtfokFjZzwWC7uQDoaWSC-sB1DxLSC91G8tUQWdXv~OB4kj3qe2d5ro1KGhXDlsVYdoH-rnS5FLf2nC8~OyRHhBSrPmaApysm1SzXQiEiEUx7PSUup82p20ylsm9ls2mpljqpBkGlBDgtnkRGCSA8cg4jD1Qpj94p1a0gBH7rbKxkrITp7RBr6yi1~dIFCo8hjIiW0qdfLZCiAYyNjGbsAFBfWDcbY1sU5Y6TKhZsgmNNwWWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        },
        {
          header: "Bakso jumbo",
          body: "Bakso pak ndut, Dlopo",
          src: "https://s3-alpha-sig.figma.com/img/ba95/7ae4/19bc1954bc477640abb1f855c9085871?Expires=1605484800&Signature=CDBQZjDG~SDufyKOkLlOWlremDUVpKC2yyNx-pvoxW1Cv0uiFAA4suS8xt1S~9gERg6Mrf7D99ajRZSG09wUue4MndnCGuOvbDb8KY~tIMJdgr2eFgj6mH9IA9pPD6yFeSJ0qQCM7BEBRuDw0FCWfH8s0iZWyw4VXUnkwyR0x8wzEtRunz7pTMuYndhYLKbu3w7ldqa~gH9vZAI2FsVSG6DIIOndMwmnQYOFbEAO1RvMLw-3eQc1ssjkhkdNCQp~1hcdf~T3MMJvdX44La6BY1kcNNAM~y~JJJJq5ZPafYda6CEcBewxG-2-TuvFT0ZW5SGD32PGUkB4bYFccDjYfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        }
      ]
    }
  }
}