import AncientOfWonders from "@/components/items/Ancient of Wonders/page";
import AncientWeaponry from "@/components/items/Ancient Weaponry/page";
import ArcaneSanctum from "@/components/items/Arcane Sanctum/page";
import BeggarTodd from "@/components/items/Beggar Todd/page";
import BlackMarket from "@/components/items/Black Market/page";
import CacheoftheQuelthelan from "@/components/items/Cache of the Quelthelan/page";
import EnchantedArtifacts from "@/components/items/Enchanted Artifacts/page";
import GatewayRelics from "@/components/items/gateway relics/page";
import GrylaTheAccessorizer from "@/components/items/Gryla The Accessorizer/page";
import LeragasTheVile2 from "@/components/items/Laregas The Vile2/page";
import LeragasTheVile from "@/components/items/Leragas The Vile/page";
import Protectorate from "@/components/items/Protectorate/page";
import SupportiveVestments from "@/components/items/supportive vestments/page";
import TrophyDealer from "@/components/items/Trophy Dealer/page";
import WeaponsDealer from "@/components/items/Weapons Dealer/page";
import ScourgeAguility from "@/components/scourge aguility/page";
import ScourgeIntel from "@/components/scourge intel/page";
import ScourgeStrength from "@/components/scourge strength/page";
import SentinelAguility from "@/components/sentinel aguility/page";
import SentinelIntel from "@/components/sentinel intel/page";
import SentinelStrength from "@/components/sentinel strength/page";

export default function Home() {
  return (
    <div dir="ltr" className="flex flex-col p-[2px]">
      {/* heros section */}
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/1.jpg" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Sentinel Strength</h1>
      </div>
      <div className="flex flex-wrap h-[155px]  border-[2px]">
        <SentinelStrength />
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/2.jpg" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Sentinel Aguility</h1>
      </div>
      <div className="flex flex-wrap h-[155px]  border-[2px]">
        <SentinelAguility />
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/3.jpg" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Sentinel Intelligence</h1>
      </div>
      <div className="flex flex-wrap h-[155px]  border-[2px]">
        <SentinelIntel />
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/4.jpg" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Scourge Strength</h1>
      </div>
      <div className="flex flex-wrap h-[155px]  border-[2px]">
        <ScourgeStrength />
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/5.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Scourge Aguility</h1>
      </div>
      <div className="flex flex-wrap h-[155px]  border-[2px]">
        <ScourgeAguility />
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/6.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Scourge Intelligence</h1>
      </div>
      <div className="flex flex-wrap h-[155px]  border-[2px]">
        <ScourgeIntel />
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/1/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Gateway Relics</h1>
      </div>
     <div className="flex flex-wrap h-[80px]  border-[2px]">
        <GatewayRelics />
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/2/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Supportive Vestments</h1>
      </div>
     <div className="flex flex-wrap h-[80px]  border-[2px]">
        <SupportiveVestments/>
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/3/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Arcane Sanctum</h1>
      </div>
     <div className="flex flex-wrap h-[80px]  border-[2px]">
        <ArcaneSanctum/>
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/4/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Protectorate</h1>
      </div>
     <div className="flex flex-wrap h-[80px]  border-[2px]">
        <Protectorate/>
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/5/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Enchanted Artifacts</h1>
      </div>
     <div className="flex flex-wrap h-[80px]  border-[2px]">
        <EnchantedArtifacts/>
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/6/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Ancient Weaponry </h1>
      </div>
     <div className="flex flex-wrap h-[80px]  border-[2px]">
        <AncientWeaponry/>
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/7/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Gryla The Accessorizer  </h1>
      </div>
     <div className="flex flex-wrap h-[75px]  border-[2px]">
        <GrylaTheAccessorizer/>
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/8/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Leragas The Vile  </h1>
      </div>
     <div className="flex flex-wrap h-[75px]  border-[2px]">
        <LeragasTheVile/>
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/9/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Weapons Dealer  </h1>
      </div>
     <div className="flex flex-wrap h-[75px]  border-[2px]">
        <WeaponsDealer/>
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/10/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Cache of the Quelthelan   </h1>
      </div>
     <div className="flex flex-wrap h-[75px]  border-[2px]">
        <CacheoftheQuelthelan/>
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/11/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Ancient Of Wonders   </h1>
      </div>
     <div className="flex flex-wrap h-[40px]  border-[2px]">
        <AncientOfWonders/>
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/12/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">BlackMarket</h1>
      </div>
     <div className="flex flex-wrap h-[40px]  border-[2px]">
        <BlackMarket/>
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/13/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Trophy Dealer</h1>
      </div>
     <div className="flex flex-wrap h-[75px]  border-[2px]">
        <TrophyDealer/>
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/14/m.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Beggar Todd </h1>
      </div>
     <div className="flex flex-wrap h-[75px]  border-[2px]">
        <BeggarTodd/>
      </div>
      <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
        <img src="images/items/15/s.png" alt="" className="w-[20px] h-[20px]" />
        <h1 className="text-white">Leragas The Vile  </h1>
      </div>
     <div className="flex flex-wrap h-[75px]  border-[2px]">
        <LeragasTheVile2/>
      </div>
    </div>
  );
}
