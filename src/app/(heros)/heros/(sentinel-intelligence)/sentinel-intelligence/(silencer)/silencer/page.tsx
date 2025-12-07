import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/silencer/1.jpg" alt="" />
            <img src="/images/heros/silencer/2.jpg" alt="" />
            <img src="/images/heros/silencer/3.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/oblivion", img: "/images/items/gateway/oblivion.png", className: "null" },
                    { href: "/items/gateway/oblivion", img: "/images/items/gateway/oblivion.png", className: "null" },
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" },
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" },
                    { href: "/items/trophy/pike", img: "/images/items/trophy/pike.png", className: "null" },
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },]} />
            </div>
        </div>
    )
}