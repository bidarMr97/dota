import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/invoker/1.jpg" alt="" />
            <img src="/images/heros/invoker/2.jpg" alt="" />
            <img src="/images/heros/invoker/3.jpg" alt="" />
            <img src="/images/heros/invoker/4.jpg" alt="" />
            <img src="/images/heros/invoker/5.jpg" alt="" />
            <img src="/images/heros/invoker/6.jpg" alt="" />
            <img src="/images/heros/invoker/7.jpg" alt="" />
            <img src="/images/heros/invoker/8.jpg" alt="" />
            <img src="/images/heros/invoker/9.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" },
                    { href: "/items/gateway/hand", img: "/images/items/gateway/hand.jpg", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" },
                    { href: "/items/arcane/eul", img: "/images/items/arcane/eul.png", className: "null" },
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" },]} />
            </div>
        </div>
    )
}