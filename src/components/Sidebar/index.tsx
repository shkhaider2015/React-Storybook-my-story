import "../Sidebar/index.css";
import { ReactComponent as ClientIcon } from "../../images/icons/clientsVec.svg";
import { ReactComponent as DietIcon } from "../../images/icons/dietVec.svg";
import { ReactComponent as LogoutIcon } from "../../images/icons/logoutVec.svg";
import { ReactComponent as AccountSettingIcon } from "../../images/icons/accountSettingVec.svg";
import { ReactComponent as AppIcon } from "../../images/app_icon.svg";
import { ReactComponent as IntegrationIcon } from "../../images/icons/integrationVec.svg";
import { ReactComponent as OrderIcon } from "../../images/icons/ordersVec.svg";
import { ReactComponent as ReportingIcon } from "../../images/icons/reportingVec.svg";
import { ReactComponent as BackIcon } from "../../images/icons/backVec.svg";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface propType {
  sidebarType: "Client" | "Restaurant";
}

const Sidebar = ({ sidebarType }: propType) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const { res_name } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    //  for client route
    if (location.pathname.includes("clients")) {
      if(location.pathname.includes("reportings")) setSelectedItem(2);
      else if(location.pathname.includes("orders")) setSelectedItem(3);
      else if(location.pathname.includes("integrations")) setSelectedItem(4);
      else if(location.pathname.includes("account_setting")) setSelectedItem(5);
      else setSelectedItem(1);
    }
    else if (location.pathname.includes("diets")) setSelectedItem(2)
    else if (location.pathname.includes("ingredients")) setSelectedItem(3)
    else if (location.pathname.includes("account_settings")) setSelectedItem(4)
    else setSelectedItem(5)
    // eslint-disable-next-line
  }, [location]);

  if (sidebarType === "Client") {
    return (
      <div className="side-root">
        <div className="drawer-header">
          <AppIcon className="app-icon" />
          <h1>Goldi</h1>
        </div>
        <div className="side-section">
          {/* dfdd dfdf */}
          <div
            className={`side-item ${
              selectedItem === 1 ? "item-selected" : ""
            }  `}
            onClick={() => {
              navigate("/clients")
              setSelectedItem(1)}}
          >
            <div className={`hr-line ${selectedItem === 1 ? "selected" : "" } `} ></div>
            <div className="svg-container">
              <ClientIcon
                className={`svg-logo ${selectedItem === 1 ? "selected" : ""} `}
              />
              <div
                className={`svg-text ${selectedItem === 1 ? "selected" : ""} `}
              >
                Clients
              </div>
            </div>
          </div>

          <div
            className={`side-item ${
              selectedItem === 2 ? "item-selected" : ""
            }  `}
            onClick={() => {
              navigate("/diets")
              setSelectedItem(2)}}
          >
            <div className={`hr-line ${selectedItem === 2 ? "selected" : "" } `} ></div>
            <div className="svg-container" >
            <DietIcon
              className={`svg-logo ${selectedItem === 2 ? "selected" : ""} `}
            />
            <div
              className={`svg-text ${selectedItem === 2 ? "selected" : ""} `}
            >
              Diets
            </div>
            </div>
          </div>
          <div
            className={`side-item ${
              selectedItem === 3 ? "item-selected" : ""
            }  `}
            onClick={() => {
              navigate("/ingredients")
              setSelectedItem(3)}}
          >
            <div className={`hr-line ${selectedItem === 3 ? "selected" : "" } `} ></div>
           <div className="svg-container" >
           <DietIcon
              className={`svg-logo ${selectedItem === 3 ? "selected" : ""} `}
            />
            <div
              className={`svg-text ${selectedItem === 3 ? "selected" : ""} `}
            >
              Ingredients
            </div>
           </div>
          </div>
          <div
            className={`side-item ${
              selectedItem === 4 ? "item-selected" : ""
            }  `}
            onClick={() => {
              navigate("/account_settings")
              setSelectedItem(4)}}
          >
            <div className={`hr-line ${selectedItem === 4 ? "selected" : "" } `} ></div>
           <div className="svg-container" >
           <AccountSettingIcon
              className={`svg-logo ${selectedItem === 4 ? "selected" : ""} `}
            />
            <div
              className={`svg-text ${selectedItem === 4 ? "selected" : ""} `}
            >
              Account Settings
            </div>
           </div>
          </div>
          <div
            className={`side-item ${
              selectedItem === 5 ? "item-selected" : ""
            }  `}
            onClick={() => setSelectedItem(5)}
          >
            <div className={`hr-line ${selectedItem === 5 ? "selected" : "" } `} ></div>
            <div className="svg-container" >
            <LogoutIcon
              className={`svg-logo ${selectedItem === 5 ? "selected" : ""} `}
            />
            <div
              className={`svg-text ${selectedItem === 5 ? "selected" : ""} `}
            >
              Logout
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (sidebarType === "Restaurant") {
    return (
      <div className="side-root">
        <div className="drawer-header">
          <BackIcon
            width="20px"
            height="20px"
            className="back-btn app-icon"
            onClick={() => navigate("/clients")}
          />
          <h2 style={{ paddingLeft: "3%" }}>Clients</h2>
        </div>
        <div className="description">
          <span className="type" >MERCHANT</span>
          <span className="res-name" >{res_name ? res_name : ""}</span>
        </div>
        <div
          className="hr-line"
          style={{
            paddingLeft: "10%",
            paddingRight: "1%",
            paddingBottom: "5%",
            paddingTop: "5%",
          }}
        >
          <hr color="#ededed" />
        </div>
        <div className="side-section">
          {/* dfdd dfdf */}
          <div
            className={`side-item ${
              selectedItem === 1 ? "item-selected" : ""
            }  `}
            onClick={() => {
              navigate(`/clients/${res_name}`)
              setSelectedItem(1)
            }}
          >
            <div className={`hr-line ${selectedItem === 1 ? "selected" : "" } `} ></div>
            <div className="svg-container">
              <ClientIcon
                className={`svg-logo ${selectedItem === 1 ? "selected" : ""} `}
              />
              <div
                className={`svg-text ${selectedItem === 1 ? "selected" : ""} `}
              >
                Restaurants
              </div>
            </div>
          </div>

          <div
            className={`side-item ${
              selectedItem === 2 ? "item-selected" : ""
            }  `}
            onClick={() => {
              navigate(`/clients/${res_name}/reportings`)
              setSelectedItem(2)}}
          >
            <div className={`hr-line ${selectedItem === 2 ? "selected" : "" } `} ></div>
            <div className="svg-container" >
            <ReportingIcon
              className={`svg-logo ${selectedItem === 2 ? "selected" : ""} `}
            />
            <div
              className={`svg-text ${selectedItem === 2 ? "selected" : ""} `}
            >
              Reporting
            </div>
            </div>
          </div>
          <div
            className={`side-item ${
              selectedItem === 3 ? "item-selected" : ""
            }  `}
            onClick={() => {
              navigate(`/clients/${res_name}/orders`)
              setSelectedItem(3)}}
          >
            <div className={`hr-line ${selectedItem === 3 ? "selected" : "" } `} ></div>
           <div className="svg-container" >
           <OrderIcon
              className={`svg-logo ${selectedItem === 3 ? "selected" : ""} `}
            />
            <div
              className={`svg-text ${selectedItem === 3 ? "selected" : ""} `}
            >
              Orders
            </div>
           </div>
          </div>
          <div
            className={`side-item ${
              selectedItem === 4 ? "item-selected" : ""
            }  `}
            onClick={() => {
              navigate(`/clients/${res_name}/integrations`)
              setSelectedItem(4)}}
          >
            <div className={`hr-line ${selectedItem === 4 ? "selected" : "" } `} ></div>
           <div className="svg-container" >
           <IntegrationIcon
              className={`svg-logo ${selectedItem === 4 ? "selected" : ""} `}
            />
            <div
              className={`svg-text ${selectedItem === 4 ? "selected" : ""} `}
            >
              Integrations
            </div>
           </div>
          </div>
          <div
            className={`side-item ${
              selectedItem === 5 ? "item-selected" : ""
            }  `}
            onClick={() => {
              setSelectedItem(5)
              navigate(`/clients/${res_name}/account_setting/`)
            }}
          >
            <div className={`hr-line ${selectedItem === 5 ? "selected" : "" } `} ></div>
            <div className="svg-container" >
            <AccountSettingIcon
              className={`svg-logo ${selectedItem === 5 ? "selected" : ""} `}
            />
            <div
              className={`svg-text ${selectedItem === 5 ? "selected" : ""} `}
            >
              Account Settings
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Sidebar;
