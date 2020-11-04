import { motion } from "framer-motion";
import FilterController from "../../components/Recepie/filter-controller";
import RecepieContent from "../../components/Recepie/recepie-content";

interface RecepiePageProps {
  dog: {
    mixmatch: Array<{
      header: string;
      body: string;
      compose: string;
      material: Array<{
        text: string;
        percent: number;
      }>;
      info: string;
      src: string;
    }>;
    original: Array<{
      header: string;
      body: string;
      compose: string;
      material: Array<string>;
      info: string;
    }>;
  };
  cat: {
    mixmatch: Array<{
      header: string;
      body: string;
      compose: string;
      material: Array<string>;
      info: string;
    }>;
    original: Array<{
      header: string;
      body: string;
      compose: string;
      material: Array<string>;
      info: string;
    }>;
  };
}

export default function RecepiePage() {
  return (
    <>
      <motion.div
        style={{ opacity: 0 }}
        className="bg-white p-4 text-2xl fixed z-50 w-screen"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-2xl text-center font-medium">Recepies</h1>
        <FilterController />
      </motion.div>
      <RecepieContent />
    </>
  );
}

// export async function getServerSideProps(): Promise<{
//   props: RecepiePageProps;
// }> {
//   return {
//     props: {
//       dog: {
//         mixmatch: [
//           {
//             header: "Sardine x Duck",
//             src:
//               "https://s3-alpha-sig.figma.com/img/ffbf/9e39/4ff4d384b86583c3a1f730ec261c9048?Expires=1605484800&Signature=Y8Ml1bX30zkId~pZTzbsngUGSzopRdfrlYApEKD46058GCp82Xtteu4TC6jHs-B2X7CYKEJZOyJJNZbhkaya5puDsnYTczeiAUWChEFH3p~KkeBlZSepDAzj1nokgKa8B0zVAdDEcWb39c3a4EahcpzNzSNo1OHELJFZsPGYPm8StK7dZv9~NyQSAN8K~RtcAfpMd1kO1M3GqH-FKbCG2Wyn5QDxOj7WjQG4yHmxPOpYZNH5KUiikzxW3i~oLW7isQWGQwi5w5X3HeUoeKfEpNL9sflH9ogSrG4w7Md-Pa~ck88XoAaRSVVA1CPnWKfCC3vd7x-6xdB~ZO2~f6jjog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
//             body: "Lorem ipsum dolor sit amet",
//             compose: "Sardine, Duck Meat, Bone",
//             info: `Whole Sardine with Duck Meat, Bone, Organs
//             Vegetables: Broccoli, Bitter Melon, Celery, Carrot, Green Peas, Kale, Spinach
            
//             Fruits: Apple, Berries, Cantaloupe, Cucumber, Kiwi, Papaya, Pumpkin
            
//             Supplements: Apple Cider Vinegar, Olive Oil, Coconut Oil, Flaxseed, Egg`,
//             material: [
//               {
//                 text: "Meat, Bone , Offals",
//                 percent: 87,
//               },
//               {
//                 text: "Fruits & Vegetables ",
//                 percent: 10,
//               },
//               {
//                 text: "Egg & Supplements",
//                 percent: 3,
//               },
//             ],
//           },
//           {
//             header: "Chicken x Mackerel",
//             src:
//               "https://s3-alpha-sig.figma.com/img/7740/8d8f/fb1bafca3b2440a47aa4173c8e4d02e4?Expires=1605484800&Signature=SeqJoa6I~nRT1JROu4EwqBr7CwjYZU-PVvq2XRLRrn1mK7ZVN7DbMpcQ9PztpqxHQptdx4H3cb~h771nv7dxDYf~69XvERINOVGrOfoYcTj3QtaKrXKrmejYqAh4wY0x~vTSfNfV58-fGbRWTtjUAs~3zp1faYSo6vlC1fa2~uM-snNVogaEHeIiks6oWKmiUUx98ze~oc6XhYYEuZS44mQN0QoV7H4vSZAy6gy6tIfmXiBZR~GxB--eUVZ9BU6TqFouDSMEvc0JiluKdmf3e0HPXvtpK4XGfmGdqP6b9k1GRU4srMtukZKUN75OH9N0Mhc~t8RCqkg9QLxn9Z7KEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
//             body: "Lorem ipsum dolor sit amet",
//             compose: "Chicken , Mackerel, Vegetables",
//             info: `Chicken Meat, Bone, Organs, with Whole Mackerel
//               Vegetables: Broccoli, Bitter Melon, Celery, Carrot, Green Peas, Kale, Spinach
//               Fruits: Apple, Berries, Canataloupe, Cucumber, Kiwi, Papaya, Pumpkin
//               Supplements: Apple Cider Vinegar, Olive Oil, Coconut Oil, Flaxseed, Egg
//               Preportion to 125 grams a piece
//               6 Pieces per Bag`,
//             material: [
//               {
//                 text: "Meat, Bone , Offals",
//                 percent: 87,
//               },
//               {
//                 text: "Fruits & Vegetables ",
//                 percent: 10,
//               },
//               {
//                 text: "Egg & Supplements",
//                 percent: 3,
//               },
//             ],
//           },
//         ],
//         original: null,
//       },
//     },
//   };
// }
