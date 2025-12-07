import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/ezalor/1.jpg" alt="" />
            <img src="/images/heros/ezalor/2.jpg" alt="" />
            <img src="/images/heros/ezalor/3.jpg" alt="" />
            <img src="/images/heros/ezalor/4.jpg" alt="" />
            <img src="/images/heros/ezalor/5.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" },
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" },
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" },
                    { href: "/items/trophy/hex", img: "/images/items/trophy/hex.png", className: "null" },
                    { href: "/items/todd/tp-up", img: "/images/items/todd/tp-up.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" },
                    { href: "/items/todd/yasha-kaya", img: "/images/items/todd/yasha-kaya.png", className: "null" },]} />
            </div>
        </div>
    )
}