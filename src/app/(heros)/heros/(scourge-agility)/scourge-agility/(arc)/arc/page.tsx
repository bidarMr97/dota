import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/arc/1.jpg" alt="" />
            <img src="/images/heros/arc/2.jpg" alt="" />
            <img src="/images/heros/arc/3.jpg" alt="" />
            <img src="/images/heros/arc/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gryla/branch", img: "/images/items/gryla/branch.png", className: "w-[20px]" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/gryla/branch", img: "/images/items/gryla/branch.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
        </div>
    )
}