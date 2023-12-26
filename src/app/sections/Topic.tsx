import { useState } from "react"
import { Button } from "../components/Button"
import { Tag } from "../components/Tag"

export function Topic () {

    // tags A are tags that added from input
    const [tagsA, setTagsA] = useState([{add: "true", value:"topic"}])

    // tags A are tags that added from input
    const [tagsB, setTagsB] = useState([{add: "false", value:"topicB"}, {add: "false", value:"topicB"}, {add: "false", value:"topicB"}])

    function handleTagClick (tagValue : string) {
        const tag = {
            add: "true",
            value: tagValue
        }

        if(tagsA.includes(tag)) {
            alert("This topic was added!")
        }
        else {
            setTagsA([...tagsA, tag])
        }

        console.log(tagsA.includes(tag))

    }

    console.log(tagsA)

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center">
            <div className="w-3/5 flex flex-col items-start overflow-hidden">
                
                <h2 className="text-2xl font-bold mb-2">1, Đầu tiên, hãy chọn chủ đề bạn muốn nhé</h2>

                <div className="w-full border-b-2 ml-4 py-2">
                    <div className="chosen-topic inline-block">
                        {tagsA.map((e) => {
                            return (<div key={1}><Tag  add={e.add} value={e.value} /></div>)
                        })}
                    </div>

                    <input 
                        type="text" 
                        placeholder="Nhập chủ đề ở đây..."
                        className="inline-block bg-blue-400 px-3 mt-2 outline-none placeholder-gray-600 placeholder:font-bold"
                    />
                </div>

                <div className="w-full mt-3 ml-4 flex overflow-auto pb-1">
                    {tagsB.map((e) => {
                        return (<div onClick={(el) => {handleTagClick(e.value)}} key={1}><Tag  add={e.add} value={e.value} /></div>)
                    })}
                </div>

                <Button
                    value="OK"
                    className="ml-4"
                />
            </div>
        </section>
    )
}