import heroImage from '../../assets/images/hero/hero-image.svg';
import {Container} from "../../layout/container/Container";
import {Section} from "../../layout/section/Section";
import {HeroImage, HeroTextWrapper, HeroTitle, HeroWrapper} from "./Hero.styled";

export const Hero = () => {
    return (
        <Section anchor="hero">
            <Container>
                <HeroWrapper>
                    <HeroTextWrapper>
                        <HeroTitle>
                            <span>Привет!</span><br/>
                            Я Дмитрий Шумский.<br/>
                            Front-End разработчик
                        </HeroTitle>
                        <p>
                            Front-End devel oper based in Bekasi, Indonesian
                            I am coding with a clean and beautiful problem
                            solving in mind.
                        </p>
                    </HeroTextWrapper>
                    <HeroImage src={heroImage} alt=""/>
                </HeroWrapper>
            </Container>
        </Section>
    )
}

