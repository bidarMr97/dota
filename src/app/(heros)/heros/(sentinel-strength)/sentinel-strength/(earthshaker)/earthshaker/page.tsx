import Table from "@/components/table/page";

export default function EarthShaker() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/earth shaker/1.jpg" alt="ارث شیکر" />
            <img src="/images/heros/earth shaker/2.jpg" alt="ارث شیکر1" />
            <img src="/images/heros/earth shaker/3.jpg" alt="ارث شیکر2" />
            <img src="/images/heros/earth shaker/4.jpg" alt="ارث شیکر3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/soul", img: "/images/items/gateway/soul.jpg", className: "null" ,alt:"سول"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" ,alt:"اوورویم"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/ancient/battle", img: "/images/items/ancient/battle.png", className: "null" ,alt:"بتل فیوری"},
                    { href: "/items/ancient/battle", img: "/images/items/ancient/battle.png", className: "null" ,alt:"بتل فیوری2"},
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:"کریتیکال"},
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:"کریتیکال1"},]} />
            </div>
        </div>
    )
}