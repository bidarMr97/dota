import Table from "@/components/table/page";

export default function Kunka() {
    return (
        <div>
            <img src="/images/heros/kunka/1.jpg" alt="" />
            <img src="/images/heros/kunka/2.jpg" alt="" />
            <img src="/images/heros/kunka/3.jpg" alt="" />
            <img src="/images/heros/kunka/4.jpg" alt="" />
            <img src="/images/heros/kunka/5.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/battle", img: "/images/items/ancient/battle.png", className: "null" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" },
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },]} />
            </div>
        </div>
    )
}