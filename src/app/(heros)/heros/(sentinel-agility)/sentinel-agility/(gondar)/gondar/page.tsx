import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/gondar/1.jpg" alt="گوندار" />
            <img src="/images/heros/gondar/2.jpg" alt="گوندار1" />
            <img src="/images/heros/gondar/3.jpg" alt="گوندار2" />
            <img src="/images/heros/gondar/4.jpg" alt="گوندار3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوتس"},
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" ,alt:"اکویلا"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/butterfly", img: "/images/items/ancient/butterfly.png", className: "null" ,alt:"باترفلای"},
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" ,alt:"اکو"},
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" ,alt:"بلادتورن"},
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:"سیتنیک"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/enchanted/null", img: "/images/items/enchanted/null.png", className: "null" ,alt:"نال تلیسمن"},]} />
            </div>
        </div>
    )
}