import Card from "../components/UI/Card";
import Content from "../components/UI/Content";

function Portfolio() {
    return (
        <Content className="content-grid grid-col-3">
            <Card className="grid-col-span-2" />
            <Card className="grid-row-span-2" />
            <Card className="grid-col-span-2" />
            <Card className="grid-col-span-3" />
        </Content>
    )
}

export default Portfolio;