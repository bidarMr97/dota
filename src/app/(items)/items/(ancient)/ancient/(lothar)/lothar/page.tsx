
import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (
        <div>
            <img src="/images/items/ancient/lothar.png" alt="لوتارز اج" className="m-auto" />
            <img src="/images/items/ancient/12.jpg" alt="توضیحات" className="lg:w-[450px] m-auto border-6 border-red-500"/>

            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/weapons/broadsword"><img src="/images/items/weapons/broadsword.png" alt="بروداسورد" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="شاپ وپنز" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/weapons/blitz"><img src="/images/items/weapons/blitz.png" alt="بلیتز" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="1شاپ وپنز" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/cache/amulet"><img src="/images/items/cache/amulet.png" alt="امولت" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/cache/m.png" alt="شاپ کش" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}