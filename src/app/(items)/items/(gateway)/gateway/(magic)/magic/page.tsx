import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (
        <div>
            <img src="/images/items/gateway/magic.png" alt="جادو" className="m-auto" />
            <img src="/images/items/gateway/8.jpg" alt="تصویر شماره ۸" className="lg:w-[450px] m-auto border-6 border-red-500"/>
            
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/gryla/branch"><img src="/images/items/gryla/branch.png" alt="شاخه" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gryla/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/gryla/branch"><img src="/images/items/gryla/branch.png" alt="شاخه" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gryla/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/gryla/circlet"><img src="/images/items/gryla/circlet.png" alt="تاج" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gryla/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/wonders/stick"><img src="/images/items/wonders/magic.png" alt="چوب جادویی" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/wonders/m.png" alt="حرف M" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
