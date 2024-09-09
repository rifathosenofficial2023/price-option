import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import ReusableForm from "./components/ReusableForm/ReusableForm";
// import RefForm from "./components/RefForm/RefForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {


   // Reusable form started
//   const handleSingUpSubmit = data =>{
//     console.log('sign up data',data);
    
// }
// const handleUpdateProfile = data => {
//       console.log('update profile', data);
      
// }
// Reusable form end

  return (
    <div>

      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}

       {/* Reusable form started */}
        {/* <ReusableForm formTitle={'Sign Up '}handleSubmit={handleSingUpSubmit}
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
        </ReusableForm> */}

        {/* Reusable form end */}



    </div>
  );
}

export default App;
