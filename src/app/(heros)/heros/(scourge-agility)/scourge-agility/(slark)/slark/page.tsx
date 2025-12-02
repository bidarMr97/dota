import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/slark/1.jpg" alt="" />
            <img src="/images/heros/slark/2.jpg" alt="" />
            <img src="/images/heros/slark/3.jpg" alt="" />
            <img src="/images/heros/slark/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/market/venom", img: "/images/items/market/venom.png", className: "null" },
                    { href: "/items/cache/wind", img: "/images/items/cache/wind.png", className: "null" },
                    { href: "/items/wonders/fire", img: "/images/items/wonders/fire.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" },
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" },
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" },
                    { href: "/items/ancient/silver", img: "/images/items/ancient/silver.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" },]} />
            </div>
        </div>
    )
}