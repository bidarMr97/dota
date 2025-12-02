import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/weaver/1.jpg" alt="" />
            <img src="/images/heros/weaver/2.jpg" alt="" />
            <img src="/images/heros/weaver/3.jpg" alt="" />
            <img src="/images/heros/weaver/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/wraith", img: "/images/items/gateway/wraith.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" },
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },
                    { href: "/items/todd/tp-up", img: "/images/items/todd/tp-up.png", className: "null" },
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" },
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" },]} />
            </div>
        </div>
    )
}