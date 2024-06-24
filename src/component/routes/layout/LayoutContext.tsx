import { Route, Routes } from "react-router-dom";
const Home = () => <div>Home Content</div>;
const Option1 = () => <div>Option 1 Content</div>;
const Option2 = () => <div>Option 2 Content</div>;
const UserTom = () => <div>Tom's Content</div>;
const UserBill = () => <div>Bill's Content</div>;
const UserAlex = () => <div>Alex's Content</div>;
const UserAlexSub1 = () => <div>Sub-Alex 1 Content</div>;
const UserAlexSub2 = () => <div>Sub-Alex 2 Content</div>;
const Team1 = () => <div>Team 1 Content</div>;
const Team2 = () => <div>Team 2 Content</div>;
const Files = () => <div>Files Content</div>;
const LayoutContext = ()  => {
       return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/option1" element={<Option1 />} />
      <Route path="/option2" element={<Option2 />} />
      <Route path="/user/tom" element={<UserTom />} />
      <Route path="/user/bill" element={<UserBill />} />
      <Route path="/user/alex" element={<UserAlex />} />
      <Route path="/user/alex/sub1" element={<UserAlexSub1 />} />
      <Route path="/user/alex/sub2" element={<UserAlexSub2 />} />
      <Route path="/team1" element={<Team1 />} />
      <Route path="/team2" element={<Team2 />} />
      <Route path="/files" element={<Files />} />
    </Routes>
  );

}
export default LayoutContext
