import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
            <img src="/images/items/supportive/vladmir.png" alt="ولادمیر" className="m-auto"/>
            <img src="/images/items/supportive/9.jpg" alt="تصویر شماره ۹" className="lg:w-[450px] m-auto border-6 border-red-500"/>
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/cache/death"><img src="/images/items/cache/death.png" alt="مرگ" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/cache/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/supportive/ring"><img src="/images/items/supportive/ring.png" alt="حلقه" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/supportive/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/supportive/headders"><img src="/images/items/supportive/headders.png" alt="هدگیر" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/supportive/m.png" alt="حرف M" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
