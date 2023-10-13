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
                    <p> I'm a junior at Brown studying computer science. Currently, I am very focused on my graphics
                        class, in which we are currently building a ray tracer from scatch. I have also been heavily
                        involved with research at Brown, conducting experiments with the GPT models and writing a paper
                        about our team's findings. Professionally, I am seeking to apply my skills toward software engineering.
                        Outside of acedemics, I enjoy playing ultimate frisbee for my team, pfunk. I spend a lot of my time organizing social events,
                        designing the team's jerseys, and of course, throwing a disc. I also really enjoy skiing, surfing, and enjoying the outdoors.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}