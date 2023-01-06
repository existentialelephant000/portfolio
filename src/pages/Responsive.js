import responsiveColor from "./images/responsiveColor.png"
import responsive1 from "./images/responsive1.jpg"
import desktopLF from "./images/desktopLF.png"
import mobileLF from "./images/mobileLF.jpg"
import visual from "./images/visualdesign.jpg"
import desktopHF from "./images/desktopHF.jpg"
import mobileHF from "./images/mobileHF.jpg"
import ProjHeader from "./components/ProjHeader"
import './Responsive.css'
import { Button } from "./components/Button"

export function Responsive() {
    return (
        <>
        <div class="responsive">
            <br/>
            <div>
                <h1 style={{fontSize: '75px', display: 'inline-block'}}>responsive design</h1>
                <img style={{ display: 'inline-block', maxHeight:'3vw', marginLeft:'3vw'}} src={responsiveColor} />
            </div>
            <br/>
            <div>
                <ProjHeader title="the project" text="The goal of this project was to find a website and improve its design 
            and responsiveness. In the context of UI/UX, responsiveness refers to the website's ability to adapt to different screen sizes. 
            If a website is well designed when viewing from any device (e.g desktop, mobile, tablet), it has good responsiveness. 
            I chose to redisgn the U.S Passport website, since it is a crucial piece of infastructure to anybody who needs to apply 
            for, renew, or do anything regarding their American passport or Visa. The website is designed poorly, and as a result, 
            makes this critical process unnecessarily hard." width="80vw"/>
            </div>
            <br/>
            <div>
                <h1>the problems</h1>
                <p>There are a miriad of problems with the original website</p>
                <li>There is too much information on this website - users are quickly overwhelmed by the number of buttons and possibilities. 
                    This makes the learnability and memorability of the website poor</li>
                <li>Poor conceptual model - it is not an intuitive design for users to immediately start using</li>
                <li>Very little visual heirarchy/ visual flow - users are not given a clear path of what to do or look at</li>
                <li>Unneccessary features - are social media buttons really important to include on the page? Passport news?</li>
                <li>Missing features - most notably missing a "help" button</li>
            </div>
            <br/>
            <br/>
            <div class="theProblems">
                <img style={{maxWidth: "40vw"}} src={responsive1}/>
                <div style={{maxWidth: "30vw"}}>
                    <h1>accessibility issues</h1>
                    <p>Considering that this is a government website being used by millions of users across the country and globe, and that the 
                        range of demographics of people using this website is very larg, accessibility is an especially important aspect of this website.</p>
                    <li>WAVE report: 13 errors, 2 contrast errors, 33 Alerts, 4 features, 86 structural elements, 28 ARIA</li>
                    <li>9 elements missing alt texts</li>
                    <li>The text is too small, readability is weak</li>
                    <li>Poor text contrast on labels</li>
                    <li>Only other available language is Spanish. However, not even all the text is translated when in Spanish mode</li>
                    <li>Overall poor responsiveness and visual spacing on various screen sizes</li>
                </div>
            </div>
            <br/>
            <br/>
            <div>
                <ProjHeader title="the solution"/>
                <p>the process: Maximizing learnability, minimizing the 'Gulf of Evaluation', and visual
                    heirachy were a few of the guiding principles.</p>
                <li>Cut out a lot of visual junk by compressing the navigation bar into a "hamburger menu"</li>
                <li>Cut out a lot of unnecessary features such as the social media buttons</li>
                <li>Made the website responsive by using media queries</li>
                <li>Improved the learnability and conceptual model by adding a "start" button and better visual heirarchy</li>
                <li>Improved accessibility with alt tags, multiple language support, larger text and elements, good contrast ratios for text, and adding a help button</li>
            </div>
            <br/>
            <br/>
            <div>
                <ProjHeader title="designing the solution" text="After identifying how the website needed to change, I 
                completed multiple rounds of design, starting with simple wireframe sketches, working my way up to the final
                prototype, which looks very similar to the final product. Below you can see the process I went through." />
            </div>
            <br/>
            <div>
                <ProjHeader title="low fidelity sketches" width="28vw"/>
                <div class="sketches">
                    <img class="sketch" src={desktopLF}/>
                    <img class="sketch" src={mobileLF}/>
                </div>
                <br/>
                <br/>
                <ProjHeader title="visual design guide (aesthetic vibe)" width="45vw"/>
                <div>
                    <img style={{width:"40vw"}}class="sketch" src={visual}/>
                </div>
                <br/>
                <br/>
                <ProjHeader title="high fidelity prototypes" width="32vw"/>
                <div class="sketches">
                    <img class="sketch2" src={desktopHF}/>
                    <img class="sketch2" src={mobileHF}/>
                </div>
            </div>
            <br/>
            <br/>
            <div>
                <ProjHeader title="the final product" text="Here are the original website and the redesigned website.
                 Unfortunately, for now, the website has no functionality :( 
                 I hope you found the changes I made valuable, and that the website seems better suited for public use.
                 Play around with your browser size (or view the webpage from different devices) to the responsive
                 aspect of the website!"/>
            </div>
            <br/>
            <div class="webButtons">
                <a class="rButton" target="_blank" href="https://travel.state.gov/content/travel/en/passports.html">
                    <div class="rButtonContainer1">
                        <p style={{margin:"auto", color:"black"}}>original website</p>
                    </div>
                </a>
                <a class="rButton" target="_blank" href="https://existentialelephant000.github.io/responsive-redesign/">
                    <div class="rButtonContainer2">
                        <p style={{margin:"auto", color:"black"}}>redesigned</p>
                    </div>
                </a>
            </div>
            <br/>
            <br/>
            <div>
                <ProjHeader title="takeaways" text="Government websites in particular are crucial pieces of online infastructure. So many people with a very large range
                of abilities are using these websites for essential tasks. Yet as they stand, these websites prove to be unintuitive and poorly
                designed especially on mobile platforms. From a techincal standpoint, this project taught me how to use media queries in CSS to
                make websites accessible from many different types of devices. At a higher level, I learned that simpler designs are often better
                and was able to practice implementing design principles." />
            </div>
        </div>
        <br/>
        <br/>
        </>
    )
}