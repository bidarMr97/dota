import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/undying/1.jpg" alt="" />
            <img src="/images/heros/undying/2.jpg" alt="" />
            <img src="/images/heros/undying/3.jpg" alt="" />
            <img src="/images/heros/undying/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" },
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/supportive/spirit", img: "/images/items/supportive/spirit.png", className: "null" },
                    { href: "/items/protector/crimson", img: "/images/items/protector/crimson.png", className: "null" },
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" },
                    { href: "/items/supportive/pipe", img: "/images/items/supportive/pipe.png", className: "null" },
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },]} />
            </div>
        </div>
    )
}