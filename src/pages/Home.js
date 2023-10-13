import { Link } from 'react-router-dom';
import "./Home.css";
import ozone from "./images/ozone.png";
import ab from "./images/ab.png";
import responsive from "./images/responsive.png";
import search from "./images/search.png";
import me1 from "./images/me1.JPG"
import wavey from "./images/wavey.png"

export function Home() {
    return (
        <>
        <div class="home" style={{background:"cover", backgroundRepeat:"no-repeat", backgroundImage:`url(${wavey})`}}>
            <br/>
            <div class="welcome" >
                <div style={{display: 'inline-block'}}>
                    <h1 class="welcomeTitle">welcome</h1>
                    <p class="intro"> i am a junior @BrownU studying computer science with a special interest in Machine Learning</p>
                    <br/>
                    <br/>
                    <br/>    
                </div>
                <img src={me1} class="photo" alt="photo of me"/>
            </div>
            <div class="work">
                <h1 class="myWork">my work</h1>
                <div class="projects">
                    <div class="project">
                        <Link to="/Ozone">
                            <div class="overlay">
                                <img class="card" src={ozone} alt="iterative design card"/>
                            </div>    
                        </Link>
                        <p class="otitle">product design for Ozone</p>
                        <p>UX design for a startup developing a cloud-based video editing software</p>
                    </div>
                    <div class="project">
                        <Link to="/AB">
                            <div class="overlay">
                                <img class="card" src={ab} alt="AB testing card"/>
                            </div>
                        </Link>
                        <p class="abtitle">eye tracking</p>
                        <p>testing different interface using eye tracking technology</p>
                    </div>
                    <div class="project">
                        <Link to="/Responsive">
                            <div class="overlay">
                                <img class="card" src={responsive} alt="responsive design card"/>
                            </div>
                        </Link>
                        <p class="rtitle">responsive design</p>
                        <p>redesigning to US Passport website</p>
                    </div>
                    <div class="project">
                        <Link to="/Search">
                            <div class="overlay">
                                <img class="card" src={search} alt="search card"/>
                            </div>
                        </Link>
                        <p class="stitle">search</p>
                        <p>implementing a search engine using word relevance and Google's PageRank algorithms</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
