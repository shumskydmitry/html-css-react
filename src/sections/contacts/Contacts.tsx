import {ContactCard} from "@/components/cards/contact-card/ContactCard";
import {Container} from "@/layout/container/Container";
import {Section} from "@/layout/section/Section";
import {SectionTitle} from "@/components/section-title/SectionTitle";
import {SectionContent} from "@/layout/section-content/SectionContent";
import {ContactsList} from "./Contacts.styled";
import githubIcon from "@/assets/icons/github.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import emailIcon from "@/assets/icons/email.svg";
import phoneIcon from "@/assets/icons/phone.svg";

export const Contacts = () => {
    return (
        <Section>
            <Container>
                <SectionContent>
                    <SectionTitle>
                        Способы <span>связи</span>
                    </SectionTitle>
                    <ContactsList>
                        <li>
                            <ContactCard href="" icon={githubIcon} title="Github"/>
                        </li>
                        <li>
                            <ContactCard href="" icon={instagramIcon} title="Instagram"/>
                        </li>
                        <li>
                            <ContactCard href="" icon={emailIcon} title="Email"/>
                        </li>
                        <li>
                            <ContactCard href="" icon={phoneIcon} title="Phone"/>
                        </li>
                    </ContactsList>
                </SectionContent>
            </Container>
        </Section>
    )
}

