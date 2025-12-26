import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/lycan/1.jpg" alt="لایکن" />
            <img src="/images/heros/lycan/2.jpg" alt="لایکن1" />
            <img src="/images/heros/lycan/3.jpg" alt="لایکن2" />
            <img src="/images/heros/lycan/4.jpg" alt="لایکن3" />
            <img src="/images/heros/lycan/5.jpg" alt="لایکن4" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:""},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:""},
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" ,alt:""},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" ,alt:""},
                    { href: "/items/enchanted/mask", img: "/images/items/enchanted/mask.png", className: "null" ,alt:""},
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" ,alt:""},
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" ,alt:""},
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" ,alt:""},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:""},]} />
            </div>
        </div>
    )
}