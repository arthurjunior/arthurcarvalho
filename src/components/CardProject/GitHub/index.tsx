import { ButtonGit , Container} from "./styles";
import { AiOutlineAppstore } from "react-icons/ai";
export default function GitHub() {
  return (
    <Container>
        <a href="https://github.com/arthurjunior?tab=repositories" target="_blank">
          <ButtonGit>
            Todos os projetos <AiOutlineAppstore size={20} />
          </ButtonGit>
        </a>
    </Container>
  );
}
