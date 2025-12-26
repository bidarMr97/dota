import Table from "@/components/table/page";

export default function () {
    return (
        <div>
        <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/arc/1.jpg" alt="آرک-واردن" />
            <img src="/images/heros/arc/2.jpg" alt="آرک-واردن" />
            <img src="/images/heros/arc/3.jpg" alt="آرک-واردن" />
            <img src="/images/heros/arc/4.jpg" alt="آرک-واردن" />
            </div>
            <div>
                <Table data={[
                    { href: "/items/gryla/branch", img: "/images/items/gryla/branch.png", className: "null" ,alt:"برنچ"},
                    { href: "/items/gateway/hand", img: "/images/items/gateway/hand.jpg", className: "null" ,alt:"هند"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاور"},
                    { href: "/items/supportive/medalion", img: "/images/items/supportive/medalion.png", className: "null" ,alt:"مدالیون"},
                    { href: "/items/enchanted/yasha", img: "/images/items/enchanted/yasha.png", className: "null" ,alt:"یاشا"},
                    { href: "/items/laregas/ultimate", img: "/images/items/laregas/ultimate.png", className: "null" ,alt:"اولتیمیت"},]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" ,alt:"منتا"},
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" ,alt:"شیواز گارد"},
                    { href: "/items/trophy/hex", img: "/images/items/trophy/hex.png", className: "null" ,alt:"هکس"},
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" ,alt:"دزولیتر"},
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" ,alt:"سولار"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"بوت تراول"},]} />
            </div>
        </div>
    )
}