import Button from "@mui/material/Button";
import "./mainComponent.css";
import Pricing from "./pricingComponent";
function MainComponent({Head,Month,Price ,NonActive}) {
  return (
    <div className="mainDiv">
      <div className="container">
        <div className="header">
          <h6><small>{Head}</small> </h6>
          <h6>
            <span className="DollerText">${Month}</span>{" "}
            <span className="MonthText">/Month</span>
          </h6>
        </div>
        <div className="pricing">
          <Pricing Price={Price} NonActive={NonActive}>
          </Pricing>
        </div>
        <div className="button">
          <Button
            variant="contained"
            sx={{
              width: "18rem",
              height: "3rem",
              borderRadius: "4rem",
              marginBottom: "2rem",
              backgroundColor: "rgba(0, 132, 255, 0.603)",
              fontWeight:"bold"
            }}
            className="btn"
          >BUTTON</Button>
        </div>
      </div>
    </div>
  );
}
export default MainComponent;
