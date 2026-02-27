import Table from "@/components/table/page";

export default function GoblinShredder() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/goblin/1.jpg" alt="گابلین" />
            <img src="/images/heros/goblin/2.jpg" alt="گابلین1" />
            <img src="/images/heros/goblin/3.jpg" alt="گابلین2" />
            <img src="/images/heros/goblin/4.jpg" alt="گابلین3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" ,alt:"پوشن"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" ,alt:"بلید"},
                    { href: "/items/supportive/guardian", img: "/images/items/supportive/greaves.png", className: "null" ,alt:"گریوز"},
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" ,alt:"هارت"},
                    { href: "/items/protector/blood", img: "/images/items/protector/blood.png", className: "null" ,alt:"بلادثورن"},
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" ,alt:"اکتارین کور"},]} />
            </div>
        </div>
    )
}