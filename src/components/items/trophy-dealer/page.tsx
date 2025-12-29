export default function TrophyDealer() {
    return (
        <div>
            <section className="flex items-center justify-center gap-[2px] border-[4px] border-[green]" dir="ltr">
                <img src="/images/items/trophy/m.png" alt="تروفی دیلر" className="w-[20px] h-[20px]" />
                <h2 className="text-white">Trophy Dealer</h2>
            </section>
            <table>
                <thead>
                    <tr>
                        <td className="h-[40px]"><a href="/items/trophy/overwhelm"><img src="/images/items/trophy/overwhelm.png" alt="فشار" className="w-[50px]"/></a></td>
                        <td className="h-[40px]"><a href="/items/trophy/mkb"><img src="/images/items/trophy/mkb.png" alt="MKB" className="w-[50px]"/></a></td>
                        <td className="h-[40px]"><a href="/items/trophy/hex"><img src="/images/items/trophy/hex.png" alt="جادو" className="w-[50px]"/></a></td>
                        <td className="h-[40px]"><a href="/items/trophy/skadi"><img src="/images/items/trophy/skadi.png" alt="اسکادی" className="w-[50px]"/></a></td>
                        <td className="h-[40px]"><a href="/items/trophy/swift"><img src="/images/items/trophy/swift.png" alt="سریع" className="w-[50px]"/></a></td>
                        <td className="h-[40px]"><a href="/items/trophy/halberd"><img src="/images/items/trophy/halberd.png" alt="هالبراد" className="w-[50px]"/></a></td>
                        <td className="h-[40px]"><a href="/items/trophy/pike"><img src="/images/items/trophy/pike.png" alt="نیزه" className="w-[50px]"/></a></td>
                        <td className="h-[40px]"><a href="/items/trophy/travel"><img src="/images/items/trophy/endless-tp.png" alt="مسافرت بی‌پایان" className="w-[50px]"/></a></td>
                    </tr>

                    <tr>
                        <td className="h-[40px]"><a href="/items/trophy/arcane"><img src="/images/items/trophy/arcane.png" alt="جادویی" className="w-[50px]"/></a></td>
                        <td className="h-[40px]"><a href="/items/trophy/armlet"><img src="/images/items/trophy/armlet.png" alt="بازوبند" className="w-[50px]"/></a></td>
                        <td className="h-[40px]"><a href="/items/trophy/dragon"><img src="/images/items/trophy/dragon.png" alt="اژدها" className="w-[50px]"/></a></td>
                        <td className="h-[40px]"><a href="/items/trophy/gleipnir"><img src="/images/items/trophy/gleipnir.png" alt="گلیپنیر" className="w-[50px]"/></a></td>
                    </tr>

                </thead>
            </table>
        </div>
    )
}
