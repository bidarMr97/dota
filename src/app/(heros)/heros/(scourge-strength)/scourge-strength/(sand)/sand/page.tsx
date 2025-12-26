import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/sand/1.jpg" alt="سندکینگ" />
            <img src="/images/heros/sand/2.jpg" alt="سندکینگ1" />
            <img src="/images/heros/sand/3.jpg" alt="سندکینگ2" />
            <img src="/images/heros/sand/4.jpg" alt="سندکینگ3" /></div>
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" ,alt:"کوئلینگ"},
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" ,alt:"مجیک استیک"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                 ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/lotus", img: "/images/items/protector/lotus.png", className: "null" ,alt:"لوتوس ارب"},
                    { href: "/items/arcane/eul", img: "/images/items/arcane/eul.png", className: "null" ,alt:"ائول سپتر"},
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" ,alt:"اورویم"},
                    { href: "/items/supportive/spirit", img: "/images/items/supportive/spirit.png", className: "null" ,alt:"اسپیریت"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" ,alt:"شیوازگارد"},]} />
            </div>
        </div>
    )
}