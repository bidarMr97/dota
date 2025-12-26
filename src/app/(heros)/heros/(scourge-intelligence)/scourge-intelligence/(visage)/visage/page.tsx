import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/visage/1.jpg" alt="ویسیج" />
            <img src="/images/heros/visage/2.jpg" alt="ویسیج1" />
            <img src="/images/heros/visage/3.jpg" alt="ویسیج2" />
            <img src="/images/heros/visage/4.jpg" alt="ویسیج3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" ,alt:"مجیک استیک"},
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" ,alt:"اکویلا"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوت"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" ,alt:"اسالت"},
                    { href: "/items/enchanted/null", img: "/images/items/enchanted/null.png", className: "null" ,alt:"نال تلیسمن"},
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" ,alt:"سولار"},
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:"کریتیکال"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" ,alt:"اسکیدی"},]} />
            </div>
        </div>
    )
}