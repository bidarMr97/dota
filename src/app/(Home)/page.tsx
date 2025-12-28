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
import ExplainAtion from "@/components/explaination/page";

export default function Home() {
  return (
    <div className="flex flex-col p-[4px] lg:flex lg:flex-row">
      <section>
       
      </section>

      <section className="lg:order-1 lg:sticky lg:top-0 lg:h-fit lg:grow lg:ml-[10px]">
        <aside>
          <ExplainAtion />
        </aside>
      </section>
      <div className="lg:w-[1000px]">
        <div className="flex flex-wrap h-[190px]  justify-center sm:h-[193px] ">
          <SentinelStrength />
        </div>

        <div className="flex flex-wrap h-[185px]  justify-center sm:h-[190px] ">
          <SentinelAguility />
        </div>

        <div className="flex flex-wrap h-[185px]  justify-center sm:h-[190px] ">
          <SentinelIntel />
        </div>

        <div className="flex flex-wrap h-[185px]  justify-center sm:h-[190px] ">
          <ScourgeStrength />
        </div>

        <div className="flex flex-wrap h-[185px]  justify-center sm:h-[190px] ">
          <ScourgeAguility />
        </div>

        <div className="flex flex-wrap h-[185px]  justify-center sm:h-[188px] ">
          <ScourgeIntel />
        </div>

        <div className="flex flex-wrap h-[115px]  justify-center sm:h-[120px] ">
          <GatewayRelics />
        </div>

        <div className="flex flex-wrap h-[115px]  justify-center sm:h-[120px] ">
          <SupportiveVestments />
        </div>

        <div className="flex flex-wrap h-[115px]  justify-center sm:h-[120px] ">
          <ArcaneSanctum />
        </div>

        <div className="flex flex-wrap h-[115px]  justify-center sm:h-[120px] ">
          <ProtecTorate />
        </div>

        <div className="flex flex-wrap h-[115px]  justify-center sm:h-[120px] ">
          <EnchantedArtifacts />
        </div>

        <div className="flex flex-wrap h-[115px]  justify-center sm:h-[120px] ">
          <AncientWeaponry />
        </div>

        <div className="flex flex-wrap h-[115px]  justify-center sm:h-[120px] ">
          <GrylaTheAccessorizer />
        </div>

        <div className="flex flex-wrap h-[115px]  justify-center sm:h-[120px] ">
          <WeaponsDealer />
        </div>

        <div className="flex flex-wrap h-[115px]  justify-center sm:h-[120px] ">
          <CacheoftheQuelthelan />
        </div>

        <div className="flex flex-wrap h-[75px] justify-center  sm:h-[80px] ">
          <AncientOfWonders />
        </div>

        <div className="flex flex-wrap h-[115px]  justify-center sm:h-[115px] ">
          <BlackMarket />
        </div>

        <div className="flex flex-wrap h-[115px]  justify-center sm:h-[120px] ">
          <TrophyDealer />
        </div>

        <div className="flex flex-wrap h-[115px]  justify-center sm:h-[120px] ">
          <BeggarTodd />
        </div>

        <div className="flex flex-wrap h-[115px]  justify-center sm:h-[120px] ">
          <LeragasTheVile />
        </div>
      </div>
    </div>


  );
}
