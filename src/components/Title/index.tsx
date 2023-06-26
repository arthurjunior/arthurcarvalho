import { ContainerTitle, IntroTextH1, IntroTextH2, IntroTextP } from "./styles";
import Typewriter from "typewriter-effect";
export default function Title() {
  return (
    <>
      <ContainerTitle>
        <IntroTextP>Olá,👋🏻 o meu nome é</IntroTextP>
        <IntroTextH1>Lucas Santana</IntroTextH1>
        <IntroTextH2>
          <Typewriter
            options={{
              strings: ["Front-End Developer", "Specializing in React"],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
            }}
          />
        </IntroTextH2>
      </ContainerTitle>
    </>
  );
}
