import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
            <img src="/images/items/supportive/pipe.png" alt="لوله" className="m-auto"/>
            <img src="/images/items/supportive/5.jpg" alt="تصویر شماره ۵" className="lg:w-[450px] m-auto border-6 border-red-500"/>
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/protector/hood"><img src="/images/items/protector/hood.png" alt="کلاه" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/protector/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/supportive/headders"><img src="/images/items/supportive/headders.png" alt="هدست" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/supportive/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href=""><img src="/images/items/1.png" alt="تصویر ۱" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/supportive/m.png" alt="حرف M" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
