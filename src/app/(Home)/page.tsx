import GatewayRelics from "@/components/items/gateway relics/page";
import ScourgeAguility from "@/components/scourge aguility/page";
import ScourgeIntel from "@/components/scourge intel/page";
import ScourgeStrength from "@/components/scourge strength/page";
import SentinelAguility from "@/components/sentinel aguility/page";
import SentinelIntel from "@/components/sentinel intel/page";
import SentinelStrength from "@/components/sentinel strength/page";

export default function Home() {
  return (
    <div dir="ltr" className="flex flex-col">
      {/* heros section */}
      <div className="flex items-center justify-center border-[2px]" dir="ltr">
        <img src="images/1.jpg" alt="" className="w-[20px] h-[20px]" />
        <h1>Sentinel Strength</h1>
      </div>
      <div className="flex flex-wrap h-[155px]  border-[2px]">
        <SentinelStrength />
      </div>
      <div className="flex items-center justify-center border-[2px]" dir="ltr">
        <img src="images/2.jpg" alt="" className="w-[20px] h-[20px]" />
        <h1>Sentinel Aguility</h1>
      </div>
      <div className="flex flex-wrap h-[155px]  border-[2px]">
        <SentinelAguility />
      </div>
      <div className="flex items-center justify-center border-[2px]" dir="ltr">
        <img src="images/3.jpg" alt="" className="w-[20px] h-[20px]" />
        <h1>Sentinel Intelligence</h1>
      </div>
      <div className="flex flex-wrap h-[155px]  border-[2px]">
        <SentinelIntel />
      </div>
      <div className="flex items-center justify-center border-[2px]" dir="ltr">
        <img src="images/4.jpg" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Scourge Strength</h1>
      </div>
      <div className="flex flex-wrap h-[155px]  border-[2px]">
        <ScourgeStrength />
      </div>
      <div className="flex items-center justify-center border-[2px]" dir="ltr">
        <img src="images/5.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Scourge Aguility</h1>
      </div>
      <div className="flex flex-wrap h-[155px]  border-[2px]">
        <ScourgeAguility />
      </div>
      <div className="flex items-center justify-center border-[2px]" dir="ltr">
        <img src="images/6.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Scourge Intelligence</h1>
      </div>
      <div className="flex flex-wrap h-[155px]  border-[2px]">
        <ScourgeIntel />
      </div>
      <div className="flex items-center justify-center border-[2px]" dir="ltr">
        <img src="images/items/1/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Gateway Relics</h1>
      </div>
     <div className="flex flex-wrap h-[155px]  border-[2px]">
        <GatewayRelics />
      </div>
    </div>
  );
}
