import abColor from "./images/abColor.png"
import ab1 from "./images/ab1.png"
import ab2 from "./images/ab2.png"
import ab3 from "./images/ab3.png"
import ab4 from "./images/ab4.png"
import ProjHeader from "./components/ProjHeader"
import './AB.css'
export function AB() {
    return (
        <>
        <div class="ab">
            <div>
                <h1 style={{fontSize: '75px', display: 'inline-block'}}>ab testing</h1>
                <img style={{ display: 'inline-block', maxHeight:'3vw', marginLeft:'3vw'}} src={abColor} />
            </div>
            <br/>
            <div>
                <ProjHeader title="the project" text="How do we quantify design? Can we really say one design is 'better' than 
                another, in a technical sense? Actually, the answer is yes! Using eye tracking technology,
                we tracked the time it took test subjects to complete a task given two different UIs. Both interfaces
                had the same goal — to make the a restaurant ordering page as seasmless and intuitive for the user
                as possible. After collecting the data, we performed statsitical analysis by hand to determine
                if there was a sigfigant difference between designs A and B."/>
            </div>
            <br/>
            <br/>
            <div>
                <h1>ok... why though?</h1>
                <p> We often forget the sheer number of interfaces we interact with on a day to day basis and amount of time we spend
                    using them. That time adds up. If we were to add up the amount of time wasted on websites because of confusing, suboptimal designs,
                    you'd be astounded. Time is money, and nobody likes loosing money. If we are able to quantify the performance
                    of designs, choosing the right ones becomes much easier, and thus, we can save ourselves countless hours of time.
                </p>
            </div>
            <br/>
            <br/>
            <br/>
            <div class="triple">
                <ProjHeader title="ui design" text="Our group designed two different website interfaces
                we wanted to test. The goal of both of them was to create the most seamless, intuitive, 
                design which new users could pick up instantly. We used Figma to create the designs, which
                you can see below." width="35vw"/>
                <ProjHeader title="eye tracking" text="After desigining the interfaces, we tested two subjects. Using
                an eye tracker, we gave them a simple task — add an egg tart to the cart and then checkout. After 
                conducting the tests, we created heat maps showing where users' eyes spent the most time. " width="35vw"/>
            </div>
            <div class="maps">
                <img class="heatmap" src={ab1}/>
                <img class="heatmap" src={ab2}/>
                <img class="heatmap" src={ab3}/>
                <img class="heatmap" src={ab4}/>
            </div>
            <br/>
            <div>
                <ProjHeader title="statistics" text="Due to limited time with the eye tracker we could only gather so much
                of data. Thus, after preforming a student's t-test to test for time differences between the interfaces, we
                were unable to reject the null hypothesis. In short, due to the lack of data, we were not able to determine 
                which interface was faster, from a staticians' point of view." width="80vw"/>
            </div>
            <br/>
            <div>
                <h1>key takeways</h1>
                <p>key takeaway — While we were not able to come to a concrete conclusion about the interfaces we designed, this 
                    project was excellent practice in user testing, which is crucial component of UI and UX work. Just as important as 
                    the designs themselves, user testing shows you what your interfaces get right, but more importantly, what they 
                    get wrong. Going forward, I hope to apply the type of statistical scrutiny we applied in this project to my work.</p>
            </div>
            <br/>
            <br/>
        </div>
        </>
    )
}