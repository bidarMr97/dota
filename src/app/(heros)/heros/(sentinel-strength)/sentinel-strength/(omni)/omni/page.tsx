import Table from "@/components/table/page";

export default function Omni() {
    return (
        <div>
            <img src="/images/heros/omni/1.jpg" alt="" />
            <img src="/images/heros/omni/2.jpg" alt="" />
            <img src="/images/heros/omni/3.jpg" alt="" />
            <img src="/images/heros/omni/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "/items/gateway/soul", img: "/images/items/gateway/soul.jpg", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/supportive/pipe", img: "/images/items/supportive/pipe.png", className: "null" },
                    { href: "/items/protector/lotus", img: "/images/items/protector/lotus.png", className: "null" },
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" },
                    { href: "/items/protector/crimson", img: "/images/items/protector/crimson.png", className: "null" },
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },]} />
            </div>
        </div>
    )
}