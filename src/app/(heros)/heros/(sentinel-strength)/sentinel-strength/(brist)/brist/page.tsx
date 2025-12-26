import Table from "@/components/table/page";

export default function Brist() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/bristle/1.jpg" alt="هیروی-بریستل"/>
            <img src="/images/heros/bristle/2.jpg" alt="هیروی-بریستل1"/>
            <img src="/images/heros/bristle/3.jpg" alt="هیروی-بریستل2"/>
            <img src="/images/heros/bristle/4.jpg" alt="هیروی-بریستل3"/>
            <img src="/images/heros/bristle/5.jpg" alt="هیروی-بریستل4"/>
            <img src="/images/heros/bristle/6.jpg" alt="هیروی-بریستل5"/></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null", alt: "بریسر" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null", alt: "تانگو" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null", alt: "بوت-مانا" },
                ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null", alt:"بلید"},
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null", alt: "کور" },
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null", alt: "گریوز" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null", alt: "اقانیم" },
                    { href: "/items/protector/crimson", img: "/images/items/protector/crimson.png", className: "null", alt: "کریمسون" },
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null", alt: "هارت" },]} />
            </div>
        </div>
    )
}