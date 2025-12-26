import Table from "@/components/table/page";
export default function Kunka() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/kunka/1.jpg" alt="کانکا-ادمیرال" />
            <img src="/images/heros/kunka/2.jpg" alt="1کانکا-ادمیرال" />
            <img src="/images/heros/kunka/3.jpg" alt="2کانکا-ادمیرال" />
            <img src="/images/heros/kunka/4.jpg" alt="3کانکا-ادمیرال" />
            <img src="/images/heros/kunka/5.jpg" alt="4کانکا-ادمیرال" /></div>

            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null",alt:"تانگو" },
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null",alt:"بریسر" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:"فیز"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/battle", img: "/images/items/ancient/battle.png", className: "null" ,alt:"بتل فیوری"},
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:"کریتیکال"},
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:"کریتیکال"},
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" ,alt:"هوورویم"},
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" ,alt:"اکو"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"ترول بوت"},]} />
            </div>
        </div>
    )
}