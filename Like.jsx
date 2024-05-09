import { useState } from "react";
function Like(){

    let UnLiked="fa-regular fa-heart";
    let Liked="fa-solid fa-heart";
    let [isLike,setisLike]=useState(false);
    let styles={color:"red"};
    let toggleLike=()=>{
        setisLike(!isLike);
    };

    return(
        <>
        <p onClick={toggleLike}>
        {isLike?(<h1 class="fa-solid fa-heart" style={styles}></h1>):(<h1 class="fa-regular fa-heart"></h1>)}
          <br/>
          <br/>
           <button>{isLike?("Unlike"):("Like")}</button>
        </p>
        </>
    );
}


export default Like;