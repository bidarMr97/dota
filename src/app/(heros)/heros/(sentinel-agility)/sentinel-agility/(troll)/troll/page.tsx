import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/troll/1.jpg" alt="" />
            <img src="/images/heros/troll/2.jpg" alt="" />
            <img src="/images/heros/troll/3.jpg" alt="" /></div>
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" ,alt:""},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:""},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:""},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/silver", img: "/images/items/ancient/silver.png", className: "null" ,alt:""},
                    { href: "/items/protector/bkb", img: "/images/items/protector/bkb.png", className: "null" ,alt:""},
                    { href: "/items/enchanted/diffusal", img: "/images/items/enchanted/diffusal.png", className: "null" ,alt:""},
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:""},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:""},
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:""},]} />
            </div>
        </div>
    )
}