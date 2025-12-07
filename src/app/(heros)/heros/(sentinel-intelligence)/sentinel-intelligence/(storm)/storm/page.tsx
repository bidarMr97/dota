import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/storm/1.jpg" alt="" />
            <img src="/images/heros/storm/2.jpg" alt="" />
            <img src="/images/heros/storm/3.jpg" alt="" />
            <img src="/images/heros/storm/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" },
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" },
                    { href: "/items/protector/blood", img: "/images/items/protector/blood.png", className: "null" },
                    { href: "/items/trophy/hex", img: "/images/items/trophy/hex.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" },]} />
            </div>
        </div>
    )
}