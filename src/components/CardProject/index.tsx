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

interface CardProjectProps{
  title: string
  subTitle: string
  
}

export default function CardProject({title, subTitle}: CardProjectProps) {
  return (
    <CardContainer>
      <CardContent>
        <TitleProject className="titleProject">
          <h2>{title}</h2>
          <span>{subTitle}</span>
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
