import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/mortred/1.jpg" alt="" />
            <img src="/images/heros/mortred/2.jpg" alt="" />
            <img src="/images/heros/mortred/3.jpg" alt="" />
            <img src="/images/heros/mortred/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
        </div>
    )
}