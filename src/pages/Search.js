import ProjHeader from "./components/ProjHeader"
import searchColor from "./images/searchColor.png"
import './Search.css'

export function Search() {
    return (
        <>
        <div class="search">
            <div>
                <h1 style={{fontSize: '75px', display: 'inline-block'}}>search</h1>
                <img style={{ display: 'inline-block', maxHeight:'3vw', marginLeft:'3vw'}} src={searchColor} />
            </div>
        <ProjHeader title="the project" text="Based in python, the premise of search was to create a search engine based on
        word relevance and PageRank algorithms, famously implented by Google in 1998."/>
        {/* <p style={{display:'inline'}}> * I won't go in depth about how PageRank works here, but if you're interested in learning how it works, you can find more information </p>
        <a target="_blank" href="https://www.geeksforgeeks.org/page-rank-algorithm-implementation/#:~:text=PageRank%20works%20by%20counting%20the,more%20links%20from%20other%20websites.">here.</a> */}
        <br/>
        <h1>how it works</h1>
        <p>* The following was adapted from the csci0200 assignment. All rights reserved.</p>
        <p>One could determine which documents are relevant to a query just by comparing the terms in the query to those 
            in the documents. This is how search engines used to work. Then in the 1990s, Google was founded using a different 
            approach based on the PageRank algorithm (designed by the founders). The algorithm ranks pages based on the links 
            among them (without considering the content), with pages that get linked to by other pages (more “authoritative” 
            pages) getting priority in the results. Here are the key principles underlying the design of PageRank:</p> <br/>
        <li>The more pages that link to a page j, the more authoritative j should be. For example, if “Blog Brown” is linked 
            to by 5 web pages, and the Wikipedia article on “Providence, Rhode Island” is linked to by 500 pages, then it makes 
            sense to consider the Wikipedia article more authoritative.</li><br/>
        <li>The more authoritative those pages are, the still more authoritative j should be. Now, if “Providence Place Mall” 
            is linked to only by “Providence, Rhode Island”, and “Blueno” is linked to only by “Blog Brown,” it might not be 
            enough to measure a page’s authority simply by a count of the number of pages that link to that page. Indeed, it 
            makes sense to consider “Providence Place Mall” more authoritative than “Blueno” since it is linked to by a more 
            important page.</li> <br/>
        <li>The fewer links those pages have to pages other than j, the more authoritative j should be. Assume “Research at 
            Brown” is linked to only by a “NYTimes” article which links to only 10 other pages, while “Why Brown?” is linked 
            to only by “Blog Brown”, which links to 200 other pages. Because the "NYTimes’’ page has only a few links, and 
            “Brown Blog” has many links, a link from the “NYTimes” page can be considered to be more important than a link 
            from the “Brown Blog”, leading us to attribute more authority to “Research at Brown” than “Why Brown?”</li> <br/>
        <li>The closer j is to another page k (measured by the number of links that must be followed to get from j to k), 
            the more k’s score should influence j’s. For example, if the average path from “Brown University” to “Boeing” is 
            100 links, and the average path from “Brown University” to “Amy’s Personal Website” is 5 links, then all other 
            things equal, Amy’s page should be considered more authoritative than Boeing’s.</li>
        <ProjHeader text="PageRank uses these principles to compute the authority of each document. The algorithm works 
        roughly as follows: Each page’s authority is a number between 0 and 1, where the total authority across all documents 
        always equals 1. The algorithm starts by assuming that all documents have the same authority. Then, following the 
        principles, the algorithm updates the authorities based on the links between pages. Since the authority of one page 
        can affect that of another, this process of refining authorities repeats until the authorities stabilize across all 
        documents (the underlying mathematics guarantee eventual stabilization). It is important that the total authority in 
        the system is conserved, so at any point in the converging sequence of page ranks, the total authority in the system 
        will always sum to 1." />
        <br/>
        <ProjHeader title="due to the collaboration policy..." text="I cannot say much more about this project. In ideal world,
        I would describe in more detail how I implemented the project, but for now I cannot :) thanks for understanding!" />
        <br/>
        <ProjHeader title="what i learned" text="In addition to being one of the first projects I implemented from scratch, the premise of 
            search was so interesting in its own right.  It has also inspired me to think about
            webscraping — it was interesting to parse downloaded wikis, but an even more relavant implementation
            would involve parsing pages on the internet. This project inspired me to start building a webscraping website, which is 
            currently in progress." />
        </div>
        </>
    )
}