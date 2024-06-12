import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { ConfigProvider } from "antd";
import IrmButton from "@/component/IrmButton.Component";
import { IconArrowLeft } from "@tabler/icons-react";
import IrmCheckBox from "@/component/IrmCheckBox.Component";
import { useState } from "react";

export default function Home() {
  const [isChecked, setIsChecked] = useState(true);
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <IrmButton
                  type="default"
                  children="Hello"
                  click={handleClick}
                  size="large"
                  icon={<IconArrowLeft />}
                  iconPosition="end"
                />
                <h1></h1>
                <IrmButton
                  type="primary"
                  children="Hello"
                  click={handleClick}
                  size="middle"
                  icon={<IconArrowLeft />}
                  iconPosition="start"
                />
                <h1></h1>
                <IrmButton
                  type="default"
                  variant="danger"
                  children="Hello"
                  click={handleClick}
                  size="small"
                  icon={<IconArrowLeft />}
                  iconPosition="end"
                />
                <h1></h1>
                <IrmButton
                  type="default"
                  variant="secondary"
                  children="Hello"
                  click={handleClick}
                  size="large"
                  icon={<IconArrowLeft />}
                  iconPosition="start"
                />
                <h1></h1>
                <IrmButton
                  type="default"
                  variant="success"
                  children="Hello"
                  click={handleClick}
                  size="middle"
                  icon={<IconArrowLeft />}
                  iconPosition="end"
                />
                <h1></h1>
                <IrmButton
                  type="default"
                  variant="warning"
                  children="Hello"
                  click={handleClick}
                  size="small"
                  icon={<IconArrowLeft />}
                  iconPosition="start"
                />
                <div>
                <IrmCheckBox
                  label="Check me"
                  checked={isChecked}
                  onChange={(checked) => setIsChecked(checked)}
                  variant="primary"
                  disabled={false}
                />
                </div>
                
                <div className="flex">
                  <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                    Hello
                    <br />
                    World
                  </span>
                  <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                    Hello
                    <br />
                    World
                  </span>
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
