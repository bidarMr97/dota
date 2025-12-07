import Table from "@/components/table/page";

export default function EarthSpirit() {

    return (
        <div>
            <img src="/images/heros/earth/1.jpg" alt="" />
            <img src="/images/heros/earth/2.jpg" alt="" />
            <img src="/images/heros/earth/3.jpg" alt="" />
            <img src="/images/heros/earth/4.jpg" alt="" />
            <img src="/images/heros/earth/5.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" },
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" },
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" },
                    { href: "/items/protector/lotus", img: "/images/items/protector/lotus.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },]} />
            </div>
        </div>
    )
}