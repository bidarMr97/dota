import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/luna/1.jpg" alt="لونا مونفنگ" />
            <img src="/images/heros/luna/2.jpg" alt="لونا مونفنگ1" />
            <img src="/images/heros/luna/3.jpg" alt="لونا مونفنگ3" />
            <img src="/images/heros/luna/4.jpg" alt="لونا مونفنگ2" /></div>
            <div>
                <Table data={[
                    { href: "/items/enchanted/helm", img: "/images/items/enchanted/helm.png", className: "null" ,alt:"هلم اف دامینیتر"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوتس"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" ,alt:"منتا"},
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:"سیتنیک"},
                    { href: "/items/ancient/silver", img: "/images/items/ancient/silver.png", className: "null" ,alt:"سیلور اج"},
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" ,alt:"رفرش ارب"},
                    { href: "/items/todd/tp-up", img: "/images/items/todd/tp-up.png", className: "null" ,alt:"تی پی اپ"},
                    { href: "/items/ancient/butterfly", img: "/images/items/ancient/butterfly.png", className: "null" ,alt:"باترفلای"},]} />
            </div>
        </div>
    )
}