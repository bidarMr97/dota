import Table from "@/components/table/page";

export default function Wisp() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/wisp/1.jpg" alt="ویسپ" />
            <img src="/images/heros/wisp/2.jpg" alt="ویسپ1" />
            <img src="/images/heros/wisp/3.jpg" alt="ویسپ2" />
            <img src="/images/heros/wisp/4.jpg" alt="ویسپ3" /></div>
            <div>
                <Table data={[
                    { href: "/items/supportive/headders", img: "/images/items/supportive/headders.png", className: "null" ,alt:"هدرز"},
                    { href: "/items/cache/wind", img: "/images/items/cache/wind.png", className: "null" ,alt:"ویندلیس"},
                    { href: "/items/cache/speed", img: "/images/items/cache/speed.png", className: "null" ,alt:"اسپیدبوت"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/supportive/mekansm", img: "/images/items/supportive/mekansm.png", className: "null" ,alt:"مکانسم"},
                    { href: "/items/supportive/pipe", img: "/images/items/supportive/pipe.png", className: "null" ,alt:"پایپ"},
                    { href: "/items/protector/lotus", img: "/images/items/protector/lotus.png", className: "null" ,alt:"لوتوس ارب"},
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" ,alt:"هارت"},
                    { href: "/items/protector/crimson", img: "/images/items/protector/crimson.png", className: "null" ,alt:"کریمسون"},
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" ,alt:"گریوز"},]} />
            </div>
        </div>
    )
}