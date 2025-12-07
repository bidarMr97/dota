import Table from "@/components/table/page";

export default function Phoenix() {
    return (
        <div>
            <img src="/images/heros/phoenix/1.jpg" alt="" />
            <img src="/images/heros/phoenix/2.jpg" alt="" />
            <img src="/images/heros/phoenix/3.jpg" alt="" />
            <img src="/images/heros/phoenix/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/cache/speed", img: "/images/items/cache/speed.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" },
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" },
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" },]} />
            </div>
        </div>
    )
}