import Table from "@/components/table/page";

export default function Centaur() {
  return (
    <div>
      <img src="/images/heros/centaur/1.jpg" alt="" />
      <img src="/images/heros/centaur/2.jpg" alt="" />
      <img src="/images/heros/centaur/3.jpg" alt="" />
      <img src="/images/heros/centaur/4.jpg" alt="" />
      <img src="/images/heros/centaur/5.jpg" alt="" />
      <img src="/images/heros/centaur/6.jpg" alt="" />
      <img src="/images/heros/centaur/7.jpg" alt="" />
      <div>
        <Table data={[
          { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" },
          { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
          { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
          { href: "null", img: "null", className: "null" },
          { href: "null", img: "null", className: "null" },
          { href: "null", img: "null", className: "null" },]} />
      </div>
      <div>
        <Table data={[
          { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" },
          { href: "/items/protector/crimson", img: "/images/items/protector/crimson.png", className: "null" },
          { href: "/items/supportive/pipe", img: "/images/items/supportive/pipe.png", className: "null" },
          { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" },
          { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
          { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" },]} />
      </div>
    </div>
  )
}