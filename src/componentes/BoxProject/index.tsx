
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import { CardContainer, Container, Splash, FruitName, CardContent, FruitInfo, FruitDescription, Card, FruitEmoji } from "./styles"

export default function ScrollTriggered() {
  return (
    <Container>
      {food.map(([emoji, fruitName, description], i) => (
        <CardComponent i={i} emoji={emoji} fruitName={fruitName} description={description} key={emoji} />
      ))}
    </Container>
  )
}

interface CardProps {
  emoji: string
  fruitName: string
  description: string
  i: number
}

function CardComponent({ emoji, fruitName, description, i }: CardProps) {
  return (
    <CardContainer
    as={motion.div}
      className={`card-container-${i}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <Splash />
      <CardContent>
        <FruitInfo>
          <FruitName>{fruitName}</FruitName>
          <FruitDescription>{description}</FruitDescription>
        </FruitInfo>
        <Card as={motion.div} variants={cardVariants} className="card">
          <FruitEmoji>{emoji}</FruitEmoji>
        </Card>
      </CardContent>
    </CardContainer>
  )
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.3,
    },
  },
}

/**
 * ==============   Data   ================
 */

const food: [string, string, string][] = [
  ["🍅", "Tomate", "Rico em licopeno e vitamina C, excelente para a saúde cardiovascular e proteção antioxidante."],
  ["🍊", "Laranja", "Fonte abundante de vitamina C e fibras, fortalece o sistema imunológico e melhora a digestão."],
  ["🍋", "Limão", "Alto teor de vitamina C e propriedades alcalinizantes, ideal para desintoxicação e digestão."],
  ["🍐", "Pêra", "Rica em fibras e potássio, promove a saúde digestiva e ajuda no controle da pressão arterial."],
  ["🍏", "Maçã", "Contém pectina e antioxidantes, auxilia na redução do colesterol e melhora a saúde intestinal."],
  ["🫐", "Mirtilo", "Superfruta rica em antioxidantes e vitamina K, protege o cérebro e melhora a memória."],
  ["🍆", "Berinjela", "Fonte de fibras e nasunina, ajuda na redução do colesterol e proteção cardiovascular."],
  [
    "🍇",
    "Uva",
    "Rica em resveratrol e antioxidantes, promove a saúde do coração e tem propriedades anti-inflamatórias.",
  ],
]
