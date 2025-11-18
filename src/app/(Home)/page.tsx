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
    <div dir="ltr" className="flex flex-col p-[4px]">
      {/* heros section */}

      <div className="flex flex-wrap h-[180px]  border-[2px]">
        <SentinelStrength />
      </div>

      <div className="flex flex-wrap h-[180px]  border-[2px]">
        <SentinelAguility />
      </div>

      <div className="flex flex-wrap h-[180px]  border-[2px]">
        <SentinelIntel />
      </div>

      <div className="flex flex-wrap h-[180px]  border-[2px]">
        <ScourgeStrength />
      </div>

      <div className="flex flex-wrap h-[180px]  border-[2px]">
        <ScourgeAguility />
      </div>

      <div className="flex flex-wrap h-[180px]  border-[2px]">
        <ScourgeIntel />
      </div>

      <div className="flex flex-wrap h-[110px]  border-[2px]">
        <GatewayRelics />
      </div>

      <div className="flex flex-wrap h-[107px]  border-[2px]">
        <SupportiveVestments />
      </div>

      <div className="flex flex-wrap h-[105px]  border-[2px]">
        <ArcaneSanctum />
      </div>

      <div className="flex flex-wrap h-[107px]  border-[2px]">
        <Protectorate />
      </div>

      <div className="flex flex-wrap h-[106px]  border-[2px]">
        <EnchantedArtifacts />
      </div>

      <div className="flex flex-wrap h-[107px]  border-[2px]">
        <AncientWeaponry />
      </div>

      <div className="flex flex-wrap h-[105px]  border-[2px]">
        <GrylaTheAccessorizer />
      </div>

      <div className="flex flex-wrap h-[105px]  border-[2px]">
        <LeragasTheVile />
      </div>

      <div className="flex flex-wrap h-[105px]  border-[2px]">
        <WeaponsDealer />
      </div>

      <div className="flex flex-wrap h-[105px]  border-[2px]">
        <CacheoftheQuelthelan />
      </div>

      <div className="flex flex-wrap h-[66px]  border-[2px]">
        <AncientOfWonders />
      </div>

      <div className="flex flex-wrap h-[65px]  border-[2px]">
        <BlackMarket />
      </div>

      <div className="flex flex-wrap h-[108px]  border-[2px]">
        <TrophyDealer />
      </div>

      <div className="flex flex-wrap h-[108px]  border-[2px]">
        <BeggarTodd />
      </div>

      <div className="flex flex-wrap h-[107px]  border-[2px]">
        <LeragasTheVile2 />
      </div>
    </div>
  );
}
