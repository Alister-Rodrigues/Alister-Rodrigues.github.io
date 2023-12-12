import Card from "../components/UI/Card";
import Content from "../components/UI/Content";

function Home() {
    return (
    <Content className="content-grid grid-col-3">
      <Card className="grid-col-span-2" />
      <Card className="grid-row-span-2" />
      <Card className="grid-row-span-2" />
      <Card />
      <Card className="grid-col-span-2" />
    </Content>)
}

export default Home;