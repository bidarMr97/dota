import Table from "@/components/table/page";

export default function BrewMaster() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/brewmaster/1.jpg" alt="1هیروی-برومستر"/>
            <img src="/images/heros/brewmaster/2.jpg" alt="2هیروی-برومستر"/>
            <img src="/images/heros/brewmaster/3.jpg" alt="3هیروی-برومستر"/>
            <img src="/images/heros/brewmaster/4.jpg" alt="4هیروی-برومستر"/>
            <img src="/images/heros/brewmaster/5.jpg" alt="5هیروی-برومستر"/>
            <img src="/images/heros/brewmaster/6.jpg" alt="6هیروی-برومستر"/>
            <img src="/images/heros/brewmaster/7.jpg" alt="7هیروی-برومستر"/></div>
            <div>
                <Table data={[
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" ,alt:"اکویلا" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"بوت-پاور" }]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" ,alt:"هارت" },
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" ,alt:"سنگ-یاشا" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:"سیتنیک" },
                    { href: "/items/trophy/halberd", img: "/images/items/trophy/halberd.png", className: "null" ,alt:"هالبرد" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"بوت پاور" },
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" ,alt:"ریدینس" },]} />
            </div>
        </div>
    )
}