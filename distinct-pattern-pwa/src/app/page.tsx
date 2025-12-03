import ImageCarousel from "@/components/ImageCarousel";
import BestSellers from "@/components/BestSellers";
import New from "@/components/New";
import Brand from "@/components/Brand";
import Meet from "@/components/Meet";
import Vision from "@/components/Vision";
import Style from "@/components/Style";
import StoreCollection from "@/components/StoreCollection";

export default function Home() {
  return (
    <div className="">
      <ImageCarousel />
      <BestSellers />
      <New />
      <Brand />
      <Meet />
      <Vision />
      <Style />
      <StoreCollection />
    </div>
  );
}