import DisplayCard from "../components/Card/DisplayCard";
import Content from "../components/UI/Content";
import Portfolio from "../portfolio/index";

function Home() {
  return (
    <>
    <Content className="content-grid grid-col-3">
      {/* <DisplayCard className="grid-col-span-3">
        <h1>Welcome</h1>
        <h2>I&#39;m Alister Rodrigues</h2>
      </DisplayCard> */}
      <Portfolio />
    </Content>
    </>
  )
}

export default Home;