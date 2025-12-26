import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/krobleus/1.jpg" alt="کروبلئوس" />
            <img src="/images/heros/krobleus/2.jpg" alt="کروبلئوس1" />
            <img src="/images/heros/krobleus/3.jpg" alt="کروبلئوس2" />
            <img src="/images/heros/krobleus/4.jpg" alt="کروبلئوس3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" ,alt:"نال تلیسمن"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" ,alt:"هارت"},
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" ,alt:"شیوا"},
                    { href: "/items/arcane/eul", img: "/images/items/arcane/eul.png", className: "null" ,alt:"ائول سپتر"},
                    { href: "/items/todd/sang-kaya", img: "/images/items/todd/sang-kaya.png", className: "null" ,alt:"سنگ کایا"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوت"},
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" ,alt:"کور"},]} />
            </div>
        </div>
    )
}