import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/akasha/1.jpg" alt="اکاشا" />
            <img src="/images/heros/akasha/2.jpg" alt="اکاشا1" />
            <img src="/images/heros/akasha/3.jpg" alt="اکاشا2" />
            <img src="/images/heros/akasha/4.jpg" alt="اکاشا3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" ,alt:"نال تلیسمن"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوت"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" ,alt:"کور"},
                    { href: "/items/trophy/hex", img: "/images/items/trophy/hex.png", className: "null" ,alt:"هکس"},
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" ,alt:"بلادتورن"},
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" ,alt:"لینکن"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوت"},]} />
            </div>
        </div>
    )
}