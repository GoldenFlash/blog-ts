import React from "react"
import { Carousel } from 'antd';
import './carousel.scss'
// import "antd/dist/antd.css";

function onChange(a: any, b: any, c: any) {
    console.log(a, b, c);
}

export default function CoustomCarousel(props:any) {
    let images=[
        "http://pic1.win4000.com/wallpaper/5/585900095b4b0.jpg",
        "http://ww1.sinaimg.cn/large/d2e27164gw1fbtmndc12xj21kw0w04fy.jpg",
        "http://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/00/ChMkJ1XNTAiIHoSKAAKNzF75fKsAAAEIQCglckAAo3k967.jpg" 
    ]
    return (
        <div style={styles.wrapper}>
            <Carousel autoplay>
                {
                    images.map((item:any,index:number)=>{
                        return(
                            <img key={index+""} style={styles.image} src={item}></img> 
                        )
                    })
                }
                
            </Carousel>
       </div>
    )
}
let styles = {
    wrapper:{
        padding:"20px",
        // height:"200px",
        // backgroundColor:"red",
        // overflow:"hidden"

    },
    image:{
        height:"300px",
    }
}
