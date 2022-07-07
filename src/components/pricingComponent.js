import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import "./pricing.css";
function Pricing({ Price,NonActive }) {
  return (
    <div>
    {console.log(NonActive)}
      <div className="itemList">
        <div className="ActiveList">
          <ul>
            {Price.map((item) => {
              return (
                <li>
                  <span className="Icon">
                    <CheckIcon></CheckIcon>
                  </span><small>{item}</small>
                  
                </li>
              );
            })}
          </ul>
        </div>
        <div className="NonActive">
          <ul>
          {
           NonActive ? NonActive.map((item) => {
            return (
              <li>
            <span className="Close">
              <CloseIcon></CloseIcon>
            </span>
            <small>{item}</small>
             
          </li>
            );
          })
          :null

        }
          
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Pricing;
