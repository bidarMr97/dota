import Table from "@/components/table/page";

export default function Sven() {
    return (
        <div>
            <img src="/images/heros/sven/1.jpg" alt="" />
            <img src="/images/heros/sven/2.jpg" alt="" />
            <img src="/images/heros/sven/3.jpg" alt="" />
            <img src="/images/heros/sven/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },
                    { href: "/items/protector/bkb", img: "/images/items/protector/bkb.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" },]} />
            </div>
        </div>
    )
}