import "./App.css";
import MainComponent from "./components/mainComponent";

const FreeText = {
  Active: [
    "Single User",
    "5GB Storage",
    "Unlimited Public Projects",
    "Community Access",
  ],
  NonActive: [
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports",
  ],
};

const PlusText = {
  Active: [
    "5 Users",
    "50GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain"
  ],
  NonActive: [
    "Monthly Status Reports",
    
  ]
};
const ProText = {
  Active: [
    "Unlimited Users",
    "150GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Unlimited  Free Subdomain",
    "Monthly Status Reports"
  ]
  
};

function App() {
  return (
    <div className="App">
      <div className="Prices">
      <MainComponent
        Head={"FREE"}
        Month={"0"}
        Price={FreeText.Active}
        NonActive={FreeText.NonActive}
      ></MainComponent>
      <MainComponent
        Head={"PLUS"}
        Month={"9"}
        Price={PlusText.Active}
        NonActive={PlusText.NonActive}
      ></MainComponent>
      <MainComponent
        Head={"PRO"}
        Month={"49"}
        Price={ProText.Active}
      ></MainComponent>
      </div>
    </div>
  );
}

export default App;
