import Container from "../components/UI/Container";
import ItemCard from "../components/Card/ItemCard";

function Skillset() {
    const skillset = [
        {skill: "HTML", level: "Experienced"},
        {skill: "CSS", level: "Experienced"},
        {skill: "Sass", level: "Intermediate"},
        {skill: "TailwindCSS", level: "Intermediate"},
        {skill: "JavaScript", level: "Experienced"},
        {skill: "ReactJS", level: "Intermediate"},
        {skill: "NodeJS", level: "Intermediate"},
        {skill: "ASP.NET C#", level: "Intermediate"},
        {skill: "Kotlin/Java", level: "Intermediate"},
        {skill: "Git", level: "Intermediate"},
    ];
    return (
        <>
        <h1>Skills</h1>
        <Container className="card-container internal-padding-2">
            {skillset.map((skill) =>
                <ItemCard key={skill.skill} className="compact">
                    <h3 class='item-title'>{skill.skill}</h3>
                    <p>{skill.level}</p>
                </ItemCard>
            )}
        </Container>
        </>
    )
}

export default Skillset;