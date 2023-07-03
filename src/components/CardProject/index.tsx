import {
  CardContainer,
  CardContent,
  MobileContainer,
  TabletContainer,
  TagSpan,
  Tags,
  TitleProject,
} from "./styles";
import mobile from "../../assets/images/mobile.png";
import tablet from "../../assets/images/tablet.png";
import js from "../../assets/images/javascript.svg"

export default function CardProject() {
  return (
    <CardContainer>
      <CardContent>
        <TitleProject className="titleProject">
          <h2>WEBEWEWE</h2>
          <span>adsdasdasd</span>
          <Tags>
            <TagSpan>
              <img src={js} alt="" />
            </TagSpan>
          </Tags>
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
