import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/mortred/1.jpg" alt="مورترد" />
            <img src="/images/heros/mortred/2.jpg" alt="مورترد" />
            <img src="/images/heros/mortred/3.jpg" alt="مورترد" />
            <img src="/images/heros/mortred/4.jpg" alt="مورترد" />
            </div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/wraith", img: "/images/items/gateway/wraith.png", className: "null" ,alt:"ریث"},
                    ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/battle", img: "/images/items/ancient/battle.png", className: "null" ,alt:"بتل فیوری"},
                    { href: "/items/protector/bkb", img: "/images/items/protector/bkb.png", className: "null" ,alt:"بی کی بی"},
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:"سیتنیک"},
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:"بوت فیز"},
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" ,alt:"مون شارد"},
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" ,alt:"ابیسال"},]} />
            </div>
        </div>
    )
}