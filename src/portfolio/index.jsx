import DisplayCard from "../components/Card/DisplayCard";
import Container from "../components/UI/Container"
import Projects from "./Projects";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import Skillset from "./Skillset";

function Portfolio() {
    return (
        <>
            <DisplayCard className="grid-col-span-2 grid-row-span-2">
                <Skillset />
            </DisplayCard>
            <DisplayCard>
                <h1>Connect</h1>
                <Container className="card-container internal-padding-2 justify-evenly">
                    <a id="linkedin" href="https://www.linkedin.com/in/alister-rodrigues/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                    <a id="github" href="https://github.com/Alister-Rodrigues" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                </Container>
            </DisplayCard>
            <DisplayCard>
                <h1>Contact</h1>
                <Container className="column">
                    <a href="mailto:alister.rodrigs@gmail.com" id="mail">alister.rodrigs@gmail.com</a>
                    <a href="tel:8138837762" id="mobile">+91 81388 37762</a>
                </Container>
            </DisplayCard>
            <DisplayCard className="grid-col-span-3 grid-row-span-2">
                <Projects />
            </DisplayCard>
        </>
    )
}

export default Portfolio;