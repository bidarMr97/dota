import Table from "@/components/table/page";

export default function DragonKnight() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/dragon/1.jpg" alt="دراگون نایت" />
            <img src="/images/heros/dragon/2.jpg" alt="دراگون نایت1" />
            <img src="/images/heros/dragon/3.jpg" alt="دراگون نایت2" />
            <img src="/images/heros/dragon/4.jpg" alt="دراگون نایت3" />
            <img src="/images/heros/dragon/5.jpg" alt="دراگون نایت4" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/soul", img: "/images/items/gateway/soul.jpg", className: "null",alt:"سول" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null",alt:"تانگو" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null",alt:"پاوربوتس" },
                    ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null",alt:"اقانیم" },
                    { href: "/items/enchanted/mjollnir", img: "/images/items/enchanted/mjollnir.png", className: "null",alt:"میولنیر" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null",alt:"سیتنیک" },
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null",alt:"بلید" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null",alt:"تراول بوتس" },
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null",alt:"منتا" },]} />
            </div>
        </div>
    )
}