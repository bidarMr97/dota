import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/disruptor/1.jpg" alt="" />
            <img src="/images/heros/disruptor/2.jpg" alt="" />
            <img src="/images/heros/disruptor/3.jpg" alt="" />
            <img src="/images/heros/disruptor/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" },
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" },
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "/items/arcane/veli", img: "/images/items/arcane/veli.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/todd/yasha-kaya", img: "/images/items/todd/yasha-kaya.png", className: "null" },]} />
            </div>
        </div>
    )
}