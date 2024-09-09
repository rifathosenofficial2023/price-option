import "./App.css";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import RefForm from "./components/RefForm/RefForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  const handleSingUpSubmit = data =>{
    console.log('sign up data',data);
    
}
const handleUpdateProfile = data => {
      console.log('update profile', data);
      
}

  return (
    <div>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
        <ReusableForm formTitle={'Sign Up '}handleSubmit={handleSingUpSubmit}
        >
           <div>
            <h2>sign up </h2>
            <p>please sign up right now </p>
           </div>
        </ReusableForm>
        <ReusableForm formTitle={'Profile Update' } submitBtnText="Update" handleSubmit={handleUpdateProfile}>
          <div>
            <h2>update profile </h2>
            <p>Always keep your profile updated</p>
          </div>
        </ReusableForm>
    </div>
  );
}

export default App;
