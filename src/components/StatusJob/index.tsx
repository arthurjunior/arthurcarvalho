import {
  StatusIcon,
  StatusTitle,
  StatusContainer,
  StatusMessage,
} from "./styles";

export default function StatusJob() {
  return (
    <>
      <StatusContainer id="home">
        <StatusMessage>
          <StatusIcon />
          <StatusTitle><span>DISPONÍVEL PARA TRABALHO FREELANCE!</span></StatusTitle>
        </StatusMessage>

        <StatusMessage>
          <StatusIcon />
          <StatusTitle><span>DISPONÍVEL PARA TRABALHO FREELANCE!</span></StatusTitle>
        </StatusMessage>
      </StatusContainer>
    </>
  );
}
