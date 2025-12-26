import Table from "@/components/table/page";

export default function Centaur() {
  return (
    <div>
      <div className="lg:w-[450px] m-auto border-6 border-red-500">
      <img src="/images/heros/centaur/1.jpg" alt="سنتائور" />
      <img src="/images/heros/centaur/2.jpg" alt="سنتائور1" />
      <img src="/images/heros/centaur/3.jpg" alt="سنتائور2" />
      <img src="/images/heros/centaur/4.jpg" alt="سنتائور3" />
      <img src="/images/heros/centaur/5.jpg" alt="سنتائور4" />
      <img src="/images/heros/centaur/6.jpg" alt="سنتائور5" />
      <img src="/images/heros/centaur/7.jpg" alt="سنتائور6" /></div>
      <div>
        <Table data={[
          { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" ,alt:"بریسر"},
          { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوتس"},
          { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
          ]} />
      </div>
      <div>
        <Table data={[
          { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" ,alt:"بلید"},
          { href: "/items/protector/crimson", img: "/images/items/protector/crimson.png", className: "null" ,alt:"کریمسون"},
          { href: "/items/supportive/pipe", img: "/images/items/supportive/pipe.png", className: "null" ,alt:"پایپ"},
          { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" ,alt:"اوورویم"},
          { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
          { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" ,alt:"هارت"},]} />
      </div>
    </div>
  )
}