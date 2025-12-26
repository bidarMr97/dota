import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/xin/1.jpg" alt="" />
            <img src="/images/heros/xin/2.jpg" alt="" />
            <img src="/images/heros/xin/3.jpg" alt="" /></div>
            <div>
                <Table data={[
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" ,alt:""},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:""},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:""},
                    ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:""},
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:""},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:""},
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" ,alt:""},
                    { href: "/items/ancient/battle", img: "/images/items/ancient/battle.png", className: "null" ,alt:""},
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" ,alt:""},]} />
            </div>
        </div>
    )
}