"use client";
import { useState } from "react";

interface  A {
    name:string,
    type:string
};

const pokemon= () => {
    const [poke,setPoke] = useState<A>()
    const a ={
        name : "ピカチュウ",
        type : "電気"
};
const b = () => {
    setPoke(a)
}
return<div>
<div  style={{backgroundColor: "red", padding:"1px", margin :"1px" }}    >{a.name}{poke?.name}</div>
<button  onClick={b}>o</button>
</div>

};
export default pokemon;
