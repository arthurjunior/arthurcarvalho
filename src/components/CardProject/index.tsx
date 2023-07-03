import {
  CardContainer,
  CardContent,
  ContainerSpan,
  MobileContainer,
  TabletContainer,
  TitleProject,
} from "./styles";
import mobile from "../../assets/images/mobile.png";
import tablet from "../../assets/images/tablet.png";

export default function CardProject() {
  return (
    <CardContainer>
      <CardContent>
        <TitleProject className="titleProject">
          <h2>WEBEWEWE</h2>
          <span>adsdasdasd</span>
        </TitleProject>

        <TabletContainer className="mobile">
          <img src={tablet} alt="" />
          <MobileContainer>
            <img src={mobile} alt="" />
          </MobileContainer>
        </TabletContainer>
      </CardContent>
    </CardContainer>
  );
}
