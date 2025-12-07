import Table from "@/components/table/page";

export default function Wisp() {
    return (
        <div>
            <img src="/images/heros/wisp/1.jpg" alt="" />
            <img src="/images/heros/wisp/2.jpg" alt="" />
            <img src="/images/heros/wisp/3.jpg" alt="" />
            <img src="/images/heros/wisp/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/supportive/headders", img: "/images/items/supportive/headders.png", className: "null" },
                    { href: "/items/cache/wind", img: "/images/items/cache/wind.png", className: "null" },
                    { href: "/items/cache/speed", img: "/images/items/cache/speed.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/supportive/mekansm", img: "/images/items/supportive/mekansm.png", className: "null" },
                    { href: "/items/supportive/pipe", img: "/images/items/supportive/pipe.png", className: "null" },
                    { href: "/items/protector/lotus", img: "/images/items/protector/lotus.png", className: "null" },
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" },
                    { href: "/items/protector/crimson", img: "/images/items/protector/crimson.png", className: "null" },
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" },]} />
            </div>
        </div>
    )
}