import Table from "@/components/table/page";

export default function GoblinShredder() {
    return (
        <div>
            <img src="/images/heros/goblin/1.jpg" alt="" />
            <img src="/images/heros/goblin/2.jpg" alt="" />
            <img src="/images/heros/goblin/3.jpg" alt="" />
            <img src="/images/heros/goblin/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" },
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" },
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" },
                    { href: "/items/protector/blood", img: "/images/items/protector/blood.png", className: "null" },
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" },]} />
            </div>
        </div>
    )
}