
  import { FaLongArrowAltLeft } from "react-icons/fa";
  export default function () {
    return (
      <div>
            <img src="/images/items/ancient/echo.png" alt="اکو" className="m-auto" />
          <img src="/images/items/ancient/6.jpg" alt="توضیحات" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/gryla/ogre"><img src="/images/items/gryla/ogre.png" alt="اوگر" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gryla/m.png" alt="شاپ گریلا" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/gateway/oblivion"><img src="/images/items/gateway/oblivion.png" alt="اوبلیوین" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gateway/m.png" alt="شاپ گیت وی" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}