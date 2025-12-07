import Table from "@/components/table/page";

export default function EarthShaker() {
    return (
        <div>
            <img src="/images/heros/earth shaker/1.jpg" alt="" />
            <img src="/images/heros/earth shaker/2.jpg" alt="" />
            <img src="/images/heros/earth shaker/3.jpg" alt="" />
            <img src="/images/heros/earth shaker/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/soul", img: "/images/items/gateway/soul.jpg", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/ancient/battle", img: "/images/items/ancient/battle.png", className: "null" },
                    { href: "/items/ancient/battle", img: "/images/items/ancient/battle.png", className: "null" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },]} />
            </div>
        </div>
    )
}