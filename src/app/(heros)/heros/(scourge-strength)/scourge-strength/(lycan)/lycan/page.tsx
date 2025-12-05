import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/lycan/1.jpg" alt="" />
            <img src="/images/heros/lycan/2.jpg" alt="" />
            <img src="/images/heros/lycan/3.jpg" alt="" />
            <img src="/images/heros/lycan/4.jpg" alt="" />
            <img src="/images/heros/lycan/5.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" },
                    { href: "/items/enchanted/mask", img: "/images/items/enchanted/mask.png", className: "null" },
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" },
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" },
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },]} />
            </div>
        </div>
    )
}