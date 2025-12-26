import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/slark/1.jpg" alt="1اسلارک" />
            <img src="/images/heros/slark/2.jpg" alt="2اسلارک" />
            <img src="/images/heros/slark/3.jpg" alt="3اسلارک" />
            <img src="/images/heros/slark/4.jpg" alt="4اسلارک" />
            </div>
            <div>
                <Table data={[
                    { href: "/items/market/venom", img: "/images/items/market/venom.png", className: "null" ,alt:"ونوم"},
                    { href: "/items/cache/wind", img: "/images/items/cache/wind.png", className: "null" ,alt:"ویند"},
                    { href: "/items/wonders/fire", img: "/images/items/wonders/fire.png", className: "null" ,alt:"فایر"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوت"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" ,alt:"لینکن"},
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" ,alt:"بلادثورن"},
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" ,alt:"ابیسال"},
                    { href: "/items/ancient/silver", img: "/images/items/ancient/silver.png", className: "null" ,alt:"سیلور"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"بوت تراول"},
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" ,alt:"اسکیدی"},]} />
            </div>
        </div>
    )
}