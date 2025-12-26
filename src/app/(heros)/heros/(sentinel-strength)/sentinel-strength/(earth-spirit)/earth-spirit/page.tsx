import Table from "@/components/table/page";

export default function EarthSpirit() {

    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/earth/1.jpg" alt="ارث اسپیریت" />
            <img src="/images/heros/earth/2.jpg" alt="ارث اسپیریت1" />
            <img src="/images/heros/earth/3.jpg" alt="ارث اسپیریت2" />
            <img src="/images/heros/earth/4.jpg" alt="ارث اسپیریت3" />
            <img src="/images/heros/earth/5.jpg" alt="ارث اسپیریت4" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null",alt:"بریسر" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null",alt:"تانگو" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null",alt:"پاوربوتس" },
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null",alt:"بلید" },
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null",alt:"شیوازگارد" },
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null",alt:"سنگ یاشا" },
                    { href: "/items/protector/lotus", img: "/images/items/protector/lotus.png", className: "null",alt:"لوتوس ارب" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null",alt:"تراول بوتس" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null",alt:"اقانیم" },]} />
            </div>
        </div>
    )
}