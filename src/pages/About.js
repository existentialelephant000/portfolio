import me2 from "./images/me2.jpg"
import './About.css'
export function About() {
    return (
        <>
        <div class="about">
            <div class="main">
                <img class="photo2" src={me2} alt="photo of me"/>
                <div class="text2">
                    <h1>in case you were wondering...</h1>
                    <br/>
                    <p>I really enjoy the outdoors, listening to music, playing ultimate frisbee, and
                        guitar. I'm a sophomore and don't really know what I 
                        want to do with my CS degree yet, but I believe in technology's power to spark joy and love.</p>
                </div>
            </div>
        </div>
        </>
    )
}