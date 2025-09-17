import MainRoutes from "./main.routes.jsx";
import GlobalFooter from "../shared/components/global/global-footer/index.js";
import GlobalNavbar from "../shared/components/global/global-navbar/index.js";
import GlobalBackground from "../shared/components/global/global-background/index.js";
import WhatsAppButton from "../shared/components/global/whatsapp/index.js";

const Main = () => {
  return (
    <div>
      <GlobalBackground>
        <div id="content-root" />
        <GlobalNavbar />
        <MainRoutes />
        <GlobalFooter />
        <WhatsAppButton />
      </GlobalBackground>
    </div>
  );
};

export default Main;
