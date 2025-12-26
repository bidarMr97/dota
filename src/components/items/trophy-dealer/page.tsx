export default function TrophyDealer() {
    return (
        <div>
            <div className="flex items-center justify-center gap-[2px] border-[4px] border-[green]" dir="ltr">
                <img src="images/items/trophy/m.png" alt="" className="w-[20px] h-[20px]" />
                <h1 className="text-white">Trophy Dealer</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <td><a href="items/trophy/overwhelm"><img src="images/items/trophy/overwhelm.png" alt="" /></a></td>
                        <td><a href="items/trophy/mkb"><img src="images/items/trophy/mkb.png" alt="" /></a></td>
                        <td><a href="items/trophy/hex"><img src="images/items/trophy/hex.png" alt="" /></a></td>
                        <td><a href="items/trophy/skadi"><img src="images/items/trophy/skadi.png" alt="" /></a></td>
                        <td><a href="items/trophy/swift"><img src="images/items/trophy/swift.png" alt="" /></a></td>
                        <td><a href="items/trophy/halberd"><img src="images/items/trophy/halberd.png" alt="" /></a></td>
                        <td><a href="items/trophy/pike"><img src="images/items/trophy/pike.png" alt="" /></a></td>
                        <td><a href="items/trophy/travel"><img src="images/items/trophy/endless-tp.png" alt="" /></a></td>
                    </tr>

                    <tr>
                        <td><a href="items/trophy/arcane"><img src="images/items/trophy/arcane.png" alt="" /></a></td>
                        <td><a href="items/trophy/armlet"><img src="images/items/trophy/armlet.png" alt="" /></a></td>
                        <td><a href="items/trophy/dragon"><img src="images/items/trophy/dragon.png" alt="" /></a></td>
                        <td><a href="items/trophy/gleipnir"><img src="images/items/trophy/gleipnir.png" alt="" /></a></td>
                    </tr>

                </thead>
            </table>
        </div>
    )
}