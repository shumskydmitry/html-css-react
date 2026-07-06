import {ContactCard} from "@/components/cards/contact-card/ContactCard";
import {Container} from "@/layout/container/Container";
import {Section} from "@/layout/section/Section";
import {SectionTitle} from "@/components/section-title/SectionTitle";
import {SectionContent} from "@/layout/section-content/SectionContent";
import {ContactsList} from "./Contacts.styled";

export const Contacts = () => {
    return (
        <Section anchor="contacts">
            <Container>
                <SectionContent>
                    <SectionTitle>
                        Способы <span>связи</span>
                    </SectionTitle>
                    <ContactsList>
                        <li>
                            <ContactCard href="" iconId="github" text="Github"/>
                        </li>
                        <li>
                            <ContactCard href="" iconId="instagram" text="Instagram"/>
                        </li>
                        <li>
                            <ContactCard href="" iconId="email" text="Email"/>
                        </li>
                        <li>
                            <ContactCard href="" iconId="phone" text="Phone"/>
                        </li>
                    </ContactsList>
                </SectionContent>
            </Container>
        </Section>
    )
}

