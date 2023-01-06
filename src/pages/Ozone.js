import ozoneFigma from "./images/ozoneFigma.png";
import userTesting1 from "./images/userTesting1.png";
import userTesting2 from "./images/userTesting2.png";
import ozoneColor from "./images/ozoneColor.png";
import lockscreen from "./images/lockscreen.png";
import chatscreen from "./images/chatscreen.png";
import ProjHeader from "./components/ProjHeader";
import './Ozone.css';

export function Ozone() {
    return (
        <>
        <div class="ozone">
            <br/>
            <div>
                <h1 style={{fontSize: '75px', display: 'inline-block'}}>iterative design</h1>
                <img style={{ display: 'inline-block', maxHeight:'3vw', marginLeft:'3vw'}} src={ozoneColor} />
            </div>
            <br/>
            <ProjHeader title="the project" text="The goal of this project was to design an interactive interface for an emerging startup.
            The project consisted of four major parts: (1) sketching ideas of the interface, 
            (2) creating an interactive, high-fidelity prototype, (3) conducting user testing on a final, 
            revised prototype, and (4) contacting the start up. Ozone is “the world’s first fully 
            collaborative video editor in the cloud” (from YCombinator). The product will allow you to 
            upload and edit high quality footage with other people. The company describes it as 
            “Figma for video.” They also say that the editor will work even without a good wifi 
            connection or powerful computer." width="80vw"/>
            <br/>
            <div>
                <h1>what's the point?</h1>
                <p> In recent years, tech has seen more and more cloud based services. This is profitable for the companies and makes the experience
                    for the end-users seamless — gone are the days of system requirements. All you need now is an internet connection to access a wide 
                    range of entertainment and tools. Ozone is a startup that promises to fill the void of a fast, online video editor. Their idea has
                    a huge potential. </p>
            </div>
            <br/> 
            <br/>
            <div class="designChoices">
                <div>
                    <img class="image" src={lockscreen} alt="lock screen from figma"/>
                    <br/>
                    <img class="image" src={chatscreen} alt="chat screen from figma"/>
                </div>
                <div class="designChoicesText">
                    <ProjHeader title="design choices"/>
                    <br/>
                    <p class="para" >Because this is a collaborative video editing software, we needed to think about special features to include in our design.
                        We decided to include a share button, similar to many Google products. It was also challenging to think about how 
                        collaborative video editing would actually work. One idea we came up with was the concept of a “lock.” Essentially, 
                        if a user locks a video or audio file, it prevents other users from editing it at the same time. This helps eliminate 
                        potential issues with contiguous editing. This would hopefully make the workflow smoother, since each user wouldn’t have 
                        to constantly refresh the project after any edit is made.</p>
                </div>
            </div>
            <br/>
            <br/>
            <div class="designChoices">
                <div class="designChoicesText">
                    <ProjHeader title="user testing" text="Using UserTesting.com, we had real people use our interface to give us feedback
                        and suggestions. We found these incredibly helpful when making finishing touches to our final prototype.
                        Here were the instructions we gave them:"/>
                    <br/>
                    <p> Hello! Ozone is a video editing tool that enables collaboration, similar to Figma or Google Docs. 
                        Our interface is not a website — it is a prototype of a website made using Figma. It has limited 
                        functionality, most of the buttons do not work. With this in mind, please complete the following 
                        tasks to the best of your ability and then answer the post-testing questionnaire. We encourage you 
                        to think aloud as you complete the tasks. Thank you!</p>
                    <li>Login to the website</li>
                    <li>Create a new project</li>
                    <li>Open the chat</li>
                    <li>Close the chat</li>
                    <li>Open the video chat</li>
                    <li>Close the video chat</li>
                    <li>Enter full-screen mode</li>
                    <li>Exit full-screen mode</li>
                    <li>Navigate to the “Main Audio Theme” folder</li>
                </div>
                <div>
                    <img class="image" src={userTesting2} alt="lock screen from figma"/>
                    <br/>
                    <img class="image" src={userTesting1} alt="chat screen from figma"/>
                    <br/>
                    <img class="image" src={ozoneFigma} alt="chat screen from figma"/>
                </div>
            </div>
            <br/>
            <br/>
            <div>
                <ProjHeader title="final prototype" width="80vw"/>
                <iframe class="figma" width="1200" height="675" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTmwRYkB11cuZDeqfwrMfty%2FOzone-Hi-fi-Prototype%3Fnode-id%3D40%253A1989%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D40%253A1989" allowfullscreen></iframe>
            </div>
            <br/>
            <br/>
            <h1>conclusions</h1>
            <p>The iterative nature of this project proved to be the most rewarding aspect. Making a prototype, getting feedback, then
                implementing that feedback in multiple rounds showed me that the best designs come from the combination of different sets of visions, and
                a lot of iterations. In addition to implementing design principles we learned from lecture, the group work proved to be equally as
                I left this project with a sense of confidence as well — recieving a reply back from the startup felt extremely rewarding 
                in its own right. Knowing that we had done design work for an actual company was the best result of this project.
            </p>
            <br/>
            <br/>
        </div>
        </>
    )
}