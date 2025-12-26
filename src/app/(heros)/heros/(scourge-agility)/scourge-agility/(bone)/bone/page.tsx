import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/bone/1.jpg" alt="بون فلچر" />
            <img src="/images/heros/bone/2.jpg" alt="بون فلچر" />
            <img src="/images/heros/bone/3.jpg" alt="بون فلچر" />
            <img src="/images/heros/bone/4.jpg" alt="بون فلچر" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/wraith", img: "/images/items/gateway/wraith.png", className: "null" ,alt:"ریث"},
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" ,alt:"اکویلا"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:"کریتیکال"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"بوت پاور"},
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" ,alt:"لینکن"},
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" ,alt:"اسکیدی"},
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" ,alt:"بلادتورن"},
                    { href: "/items/trophy/mkb", img: "/images/items/trophy/mkb.png", className: "null" ,alt:"مانکی کینگ بار"},]} />
            </div>
        </div>
    )
}