import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
            <img src="/images/items/supportive/headders.png" alt="سرپوش" className="m-auto"/>
            <img src="/images/items/supportive/8.jpg" alt="تصویر شماره ۸" className="lg:w-[450px] m-auto border-6 border-red-500"/>
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/cache/regeneration"><img src="/images/items/cache/regeneration.png" alt="تجدید قوا" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/cache/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/gryla/branch"><img src="/images/items/gryla/branch.png" alt="شاخه" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gryla/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href=""><img src="/images/items/1.png" alt="یک" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/supportive/m.png" alt="حرف M" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
