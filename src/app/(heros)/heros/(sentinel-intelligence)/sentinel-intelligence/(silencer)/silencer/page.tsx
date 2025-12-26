import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/silencer/1.jpg" alt="سایلنسر" />
            <img src="/images/heros/silencer/2.jpg" alt="سایلنسر1" />
            <img src="/images/heros/silencer/3.jpg" alt="سایلنسر2" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/oblivion", img: "/images/items/gateway/oblivion.png", className: "null" ,alt:"اوبلیوین"},
                    { href: "/items/gateway/oblivion", img: "/images/items/gateway/oblivion.png", className: "null" ,alt:"اوبلیوین1"},
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" ,alt:"باتل"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوتس"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" ,alt:"بلادثورن"},
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" ,alt:"سوییفت"},
                    { href: "/items/trophy/pike", img: "/images/items/trophy/pike.png", className: "null" ,alt:"پایک"},
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" ,alt:"کور"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},]} />
            </div>
        </div>
    )
}