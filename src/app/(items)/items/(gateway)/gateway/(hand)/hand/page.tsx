import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (
        <div>
            <img src="/images/items/gateway/hand.png" alt="دستکش دروازه‌ای" className="m-auto" />
            <img src="/images/items/gateway/2.jpg" alt="نمای آیتم دستکش دروازه‌ای" className="lg:w-[450px] m-auto border-6 border-red-500"/>
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td>
                                <a href="/items/cache/gloves">
                                    <img src="/images/items/cache/gloves.png" alt="دستکش کش" />
                                </a>
                            </td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/cache/m.png" alt="مواد تشکیل دهنده دستکش کش" /></td>
                        </tr>
                        <tr>
                            <td>
                                <a href="">
                                    <img src="/images/items/1.png" alt="آیتم ناشناخته" />
                                </a>
                            </td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gateway/m.png" alt="مواد تشکیل دهنده دستکش دروازه‌ای" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
