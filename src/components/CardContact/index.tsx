import { ButtonContact, Container, ContentContact } from "./styles";
import logoContact from "../../assets/images/contactBanner.png";
import { WhatsappLogo } from "phosphor-react";
import { EnvelopeSimple } from "phosphor-react";
import { Link } from "react-router-dom";


export default function CardContact() {
  return (
    <Container>
      <ContentContact>
        <div className="contact-text">
          <h1>Vamos Conversar !</h1>
          <p>
            Sinta-se à vontade para entrar em contato comigo enviando um email ou me chamando 
            no Whataspp, retornarei o mais breve possível!
          </p>
        </div>

        <img src={logoContact} alt="logo contato astrounauta" />
      </ContentContact>
      <Link to="mailto:dev.arthurcarvalho@gmail.com">
      <ButtonContact>
        Email <EnvelopeSimple size={25} weight="bold" />
      </ButtonContact>
      </Link>
      <Link to="https://api.whatsapp.com/send/?phone=%2B5592996092339&text&type=phone_number&app_absent=0">
      <ButtonContact>
        Whatsapp <WhatsappLogo size={25} weight="bold" href="mailto:dev.arthurcarvalho@gmailcom"/>
      </ButtonContact>
      </Link>
    </Container>
  );
}


