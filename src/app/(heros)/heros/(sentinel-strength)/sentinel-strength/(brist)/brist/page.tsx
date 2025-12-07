import Table from "@/components/table/page";

export default function Brist() {
    return (
        <div>
            <img src="/images/heros/bristle/1.jpg" alt="" />
            <img src="/images/heros/bristle/2.jpg" alt="" />
            <img src="/images/heros/bristle/3.jpg" alt="" />
            <img src="/images/heros/bristle/4.jpg" alt="" />
            <img src="/images/heros/bristle/5.jpg" alt="" />
            <img src="/images/heros/bristle/6.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" },
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" },
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/protector/crimson", img: "/images/items/protector/crimson.png", className: "null" },
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" },]} />
            </div>
        </div>
    )
}