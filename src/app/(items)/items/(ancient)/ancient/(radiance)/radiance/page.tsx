
  
  import { FaLongArrowAltLeft } from "react-icons/fa";
  export default function () {
    return (
      <div>
            <img src="/images/items/ancient/radiance.png" alt="ریدینس" className="m-auto" />
          <img src="/images/items/ancient/9.jpg" alt="توضیحات" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/laregas/sacred"><img src="/images/items/laregas/sacred.png" alt="سیکرد" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/laregas/s.png" alt="شاپ لارگاس" /></td>
                        </tr>
                        <tr>
                            <td><a href=""><img src="/images/items/1.png" alt="ریسیپ" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/ancient/m.png" alt="شاپ انشنت" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}