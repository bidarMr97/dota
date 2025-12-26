import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/nessaj/1.jpg" alt="نساج" />
            <img src="/images/heros/nessaj/2.jpg" alt="1نساج" />
            <img src="/images/heros/nessaj/3.jpg" alt="نساج2" />
            <img src="/images/heros/nessaj/4.jpg" alt="نساج3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" ,alt:"بریسر"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوت"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" ,alt:"ابیسال"},
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" ,alt:"دزولیتر"},
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" ,alt:"منتا"},
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" ,alt:"اسالت"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" ,alt:"اکو"},]} />
            </div>
        </div>
    )
}