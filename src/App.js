import BookSlot from "./components/BookSlot";
import Header from "./components/Header";
import RegisterCust from "./components/RegisterCustomer";
import RequestForStation from "./components/RequestForStation";
import i1 from "./images/i1.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${i1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
    >
      {" "}
      <Header />
      <div>This is HomePage</div>
      <RegisterCust />
      {/* <RequestForStation /> */}
      {/* <BookSlot /> */}
    </div>
  );
}
export default App;
