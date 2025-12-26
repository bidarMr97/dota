
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
    <div className="flex flex-col p-[4px]">

      <div className="flex flex-wrap h-[180px] sm:w-[400px] sm:h-[193px]">
        <SentinelStrength />
      </div>

      <div className="flex flex-wrap h-[185px] sm:w-[400px] sm:h-[190px]">
        <SentinelAguility />
      </div>

      <div className="flex flex-wrap h-[185px] sm:w-[400px] sm:h-[190px]">
        <SentinelIntel />
      </div>

      <div className="flex flex-wrap h-[185px] sm:w-[400px] sm:h-[190px]">
        <ScourgeStrength />
      </div>

      <div className="flex flex-wrap h-[185px] sm:w-[400px] sm:h-[190px]">
        <ScourgeAguility />
      </div>

      <div className="flex flex-wrap h-[185px] sm:w-[400px] sm:h-[188px]">
        <ScourgeIntel />
      </div>

      <div className="flex flex-wrap h-[110px] sm:h-[180px] sm:w-[759px]">
        <GatewayRelics />
      </div>

      <div className="flex flex-wrap h-[107px] sm:h-[180px] sm:w-[759px]">
        <SupportiveVestments />
      </div>

      <div className="flex flex-wrap h-[105px] sm:h-[180px] sm:w-[759px]">
        <ArcaneSanctum />
      </div>

      <div className="flex flex-wrap h-[107px] sm:h-[180px] sm:w-[759px]">
        <ProtecTorate />
      </div>

      <div className="flex flex-wrap h-[106px] sm:h-[180px] sm:w-[759px]">
        <EnchantedArtifacts />
      </div>

      <div className="flex flex-wrap h-[112px] sm:h-[180px] sm:w-[759px]">
        <AncientWeaponry />
      </div>

      <div className="flex flex-wrap h-[107px] sm:h-[180px] sm:w-[759px]">
        <GrylaTheAccessorizer />
      </div>

      <div className="flex flex-wrap h-[106px] sm:h-[180px] sm:w-[759px]">
        <WeaponsDealer />
      </div>

      <div className="flex flex-wrap h-[105px] sm:h-[180px] sm:w-[759px]">
        <CacheoftheQuelthelan />
      </div>

      <div className="flex flex-wrap h-[68px] sm:h-[105px] sm:w-[759px]">
        <AncientOfWonders />
      </div>

      <div className="flex flex-wrap h-[65px] sm:h-[102px] sm:w-[759px]">
        <BlackMarket />
      </div>

      <div className="flex flex-wrap h-[110px] sm:h-[180px] sm:w-[759px]">
        <TrophyDealer />
      </div>

      <div className="flex flex-wrap h-[108px] sm:h-[180px] sm:w-[759px]">
        <BeggarTodd />
      </div>

      <div className="flex flex-wrap h-[107px] sm:h-[180px] sm:w-[759px]">
        <LeragasTheVile />
      </div>
    </div>
  );
}
