  import { FaLongArrowAltLeft } from "react-icons/fa";
  export default function () {
    return (
      <div>
            <img src="/images/items/ancient/butterfly.png" alt="باترفلای" className="m-auto" />
          <img src="/images/items/ancient/1.jpg" alt="توضیحات" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/weapons/quarter"><img src="/images/items/weapons/quarter.png" alt="کوارتر" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="شاپ وپنز" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/laregas/talisman"><img src="/images/items/laregas/talisman.png" alt="تلیسمن" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/laregas/s.png" alt="شاپ لارگاس" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/laregas/eaglehorn"><img src="/images/items/laregas/eaglehorn.png" alt="ایگل هورن" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/laregas/s.png" alt="شاپ لارگاس1" /></td>
                        </tr>
                       
                    </thead>
                </table>
            </div>
        </div>
    )
}