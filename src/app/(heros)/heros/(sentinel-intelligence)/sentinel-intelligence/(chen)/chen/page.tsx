import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/chen/1.jpg" alt="" />
            <img src="/images/heros/chen/2.jpg" alt="" />
            <img src="/images/heros/chen/3.jpg" alt="" />
            <img src="/images/heros/chen/4.jpg" alt="" />
            <img src="/images/heros/chen/5.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/supportive/medalion", img: "/images/items/supportive/medalion.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" },
                    { href: "/items/supportive/vladmir", img: "/images/items/supportive/vladmir.png", className: "null" },
                    { href: "/items/trophy/hex", img: "/images/items/trophy/hex.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/supportive/pipe", img: "/images/items/supportive/pipe.png", className: "null" },
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" },]} />
            </div>
        </div>
    )
}