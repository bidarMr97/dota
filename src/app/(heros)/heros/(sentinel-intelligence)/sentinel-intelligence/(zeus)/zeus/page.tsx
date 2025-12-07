import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/zeus/1.jpg" alt="" />
            <img src="/images/heros/zeus/2.jpg" alt="" />
            <img src="/images/heros/zeus/3.jpg" alt="" />
            <img src="/images/heros/zeus/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/arcane/aether", img: "/images/items/arcane/aether.png", className: "null" },
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/ancient/lothar", img: "/images/items/ancient/lothar.png", className: "null" },
                    { href: "/items/protector/blood", img: "/images/items/protector/blood.png", className: "null" },]} />
            </div>
        </div>
    )
}