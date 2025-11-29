
import AncientOfWonders from "@/components/items/Ancient-of-Wonders/page";
import AncientWeaponry from "@/components/items/ancient-weaponry/page";
import ArcaneSanctum from "@/components/items/arcane-sanctum/page";
import BeggarTodd from "@/components/items/beggar-todd/page";
import BlackMarket from "@/components/items/black-market/page";
import CacheoftheQuelthelan from "@/components/items/Cache-of-the-Quelthelan/page";
import EnchantedArtifacts from "@/components/items/enchanted-artifacts/page";
import GatewayRelics from "@/components/items/gateway-relics/page";
import GrylaTheAccessorizer from "@/components/items/gryla-the-accessorizer/page";
import LeragasTheVile from "@/components/items/laregas-the-vile/page";
import SupportiveVestments from "@/components/items/supportive-vestments/page";
import ProtecTorate from "@/components/items/protec-torate/page";
import TrophyDealer from "@/components/items/trophy-dealer/page";
import WeaponsDealer from "@/components/items/weapons-dealer/page";
import SentinelStrength from "@/components/heros/sentinel-strength/page";
import SentinelAguility from "@/components/heros/sentinel-aguility/page";
import SentinelIntel from "@/components/heros/sentinel-intel/page";
import ScourgeStrength from "@/components/heros/scourge-strength/page";
import ScourgeAguility from "@/components/heros/scourge-agility/page";
import ScourgeIntel from "@/components/heros/scourge-intel/page";

export default function Home() {
  return (
    <div dir="ltr" className="flex flex-col p-[4px]">

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
        <ProtecTorate />
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

      <div className="flex flex-wrap h-[120px]  border-[2px]">
        <TrophyDealer />
      </div>

      <div className="flex flex-wrap h-[108px]  border-[2px]">
        <BeggarTodd />
      </div>

      <div className="flex flex-wrap h-[107px]  border-[2px]">
        <LeragasTheVile />
      </div>
    </div>
  );
}
