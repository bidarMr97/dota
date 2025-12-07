import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/oracle/1.jpg" alt="" />
            <img src="/images/heros/oracle/2.jpg" alt="" />
            <img src="/images/heros/oracle/3.jpg" alt="" />
            <img src="/images/heros/oracle/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" },
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" },
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/todd/yasha-kaya", img: "/images/items/todd/yasha-kaya.png", className: "null" },
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" },
                    { href: "/items/market/sentry", img: "/images/items/market/sentry.png", className: "null" },]} />
            </div>
        </div>
    )
}