import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/ancient/armlet.png" alt="بازوبند باستانی" className="m-auto"/>
          <img src="/images/items/ancient/4.jpg" alt="تصویر آیتم باستانی" className="lg:w-[450px] m-auto border-6 border-red-500"/>
       <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/weapons/ironwill"><img src="/images/items/weapons/ironwill.png" alt="سلاح اراده آهنین" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red"/></td>
                            <td><img src="/images/items/weapons/m.png" alt="مواد سلاح" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/weapons/attack"><img src="/images/items/weapons/attack.png" alt="سلاح حمله" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="مواد سلاح" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/cache/gloves"><img src="/images/items/cache/gloves.png" alt="دستکش مخزن" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/cache/m.png" alt="مواد مخزن" /></td>
                        </tr>
                        <tr>
                            <td><a href=""><img src="/images/items/1.png" alt="آیتم شماره یک" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/ancient/m.png" alt="مواد باستانی" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}