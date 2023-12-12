import Card from "../components/UI/Card";
import Content from "../components/UI/Content";

function Blog() {
    return (
        <Content className="content-grid grid-col-2">
            <Card className="grid-row-span-2" />
            <Card />
            <Card className="grid-row-span-2" />
            <Card />
        </Content>
    )
}

export default Blog;