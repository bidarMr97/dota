import Table from "@/components/table/page";

export default function Omni() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/omni/1.jpg" alt="اومنی نایت" />
            <img src="/images/heros/omni/2.jpg" alt="اومنی نایت1" />
            <img src="/images/heros/omni/3.jpg" alt="اومنی نایت2" />
            <img src="/images/heros/omni/4.jpg" alt="اومنی نایت3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                    { href: "/items/gateway/soul", img: "/images/items/gateway/soul.jpg", className: "null" ,alt:"سول"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/supportive/pipe", img: "/images/items/supportive/pipe.png", className: "null" ,alt:"پایپ"},
                    { href: "/items/protector/lotus", img: "/images/items/protector/lotus.png", className: "null" ,alt:"لوتوس"},
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" ,alt:"شیوازگارد"},
                    { href: "/items/protector/crimson", img: "/images/items/protector/crimson.png", className: "null" ,alt:"کریمسون"},
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" ,alt:"گریوز"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},]} />
            </div>
        </div>
    )
}