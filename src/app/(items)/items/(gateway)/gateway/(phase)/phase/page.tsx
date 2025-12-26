import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (
        <div>
            <img src="/images/items/gateway/phase.png" alt="فاز" className="m-auto" />
            <img src="/images/items/gateway/5.jpg" alt="تصویر شماره ۵" className="lg:w-[450px] m-auto border-6 border-red-500"/>
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/weapons/attack"><img src="/images/items/weapons/attack.png" alt="حمله" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/weapons/attack"><img src="/images/items/weapons/attack.png" alt="حمله" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/cache/speed"><img src="/images/items/cache/speed.png" alt="سرعت" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/cache/m.png" alt="حرف M" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
