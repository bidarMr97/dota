import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/night/1.jpg" alt="نایت استاکر" />
            <img src="/images/heros/night/2.jpg" alt="نایت استاکر1" />
            <img src="/images/heros/night/3.jpg" alt="نایت استاکر2" />
            <img src="/images/heros/night/4.jpg" alt="نایت استاکر3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" ,alt:"بریسر"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوت"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" ,alt:"سنگ یاشا"},
                    { href: "/items/enchanted/mask", img: "/images/items/enchanted/mask.png", className: "null" ,alt:"مسک"},
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" ,alt:"ابیسال"},
                    { href: "/items/ancient/armlet", img: "/images/items/ancient/armlet.png", className: "null" ,alt:"ارملت"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" ,alt:"مونشارد"},]} />
            </div>
        </div>
    )
}