import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/antimage/1.jpg" alt="انتی میج" />
            <img src="/images/heros/antimage/2.jpg" alt="انتی میج1" />
            <img src="/images/heros/antimage/3.jpg" alt="انتی میج2" />
            <img src="/images/heros/antimage/4.jpg" alt="انتی میج3" /></div>
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" ,alt:"کوئلینگ"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" ,alt:"اکویلا"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوتس"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" ,alt:"ابیسال"},
                    { href: "/items/ancient/battle", img: "/images/items/ancient/battle.png", className: "null" ,alt:"بتل فیوری"},
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:"سیتنیک"},
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" ,alt:"منتا"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوتس"},
                    { href: "/items/ancient/butterfly", img: "/images/items/ancient/butterfly.png", className: "null" ,alt:"باترفلای"},]} />
            </div>
        </div>
    )
}