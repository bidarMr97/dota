import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/phantom/1.jpg" alt="فانتوم لنسر" />
            <img src="/images/heros/phantom/2.jpg" alt="فانتوم لنسر1" />
            <img src="/images/heros/phantom/3.jpg" alt="فانتوم لنسر2" />
            <img src="/images/heros/phantom/4.jpg" alt="فانتوم لنسر3" /></div>
            <div>
                <Table data={[
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" ,alt:"اکویلا"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوتس"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" ,alt:"هارت"},
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" ,alt:"ابیسال"},
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" ,alt:"رادیانس"},
                    { href: "/items/enchanted/diffusal", img: "/images/items/enchanted/diffusal.png", className: "null" ,alt:"دیفیوزال"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/supportive/vladmir", img: "/images/items/supportive/vladmir.png", className: "null" ,alt:"ولادمیر"},]} />
            </div>
        </div>
    )
}