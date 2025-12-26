import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/ancient/1.jpg" alt="انشنت" />
            <img src="/images/heros/ancient/2.jpg" alt="انشنت1" />
            <img src="/images/heros/ancient/3.jpg" alt="انشنت2" />
            <img src="/images/heros/ancient/4.jpg" alt="انشنت3" />
            <img src="/images/heros/ancient/5.jpg" alt="انشنت4" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" ,alt:"نول تلیسمان"},
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" ,alt:"باتل"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوت"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" ,alt:"لینکن"},
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" ,alt:"اوورویم"},
                    { href: "/items/todd/tp-up", img: "/images/items/todd/tp-up.png", className: "null" ,alt:"تیپی اپ"},
                    { href: "/items/todd/yasha-kaya", img: "/images/items/todd/yasha-kaya.png", className: "null" ,alt:"یاشا-کایا"},]} />
            </div>
        </div>
    )
}