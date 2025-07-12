import * as motion from "motion/react-client"
import { Traducao } from "../../componentes/Traducao";
import type { Variants } from "motion/react"
import {
  CardContainer,
  Container,
  Splash,
  CardContent,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectImage,
  Tag,
  ButtonGroup,
  Button,
  Card,
} from "./styles"

interface CardProps {
  photo: string
  projectName: string
  description: string
  url: string
  repository: string
  tags?: string[] 
}

export default function ScrollTriggered({
  photo,
  projectName,
  description,
  url,
  repository,
//   album,
  tags = ["Javascript", "CSS"], 
}: CardProps) {
  return (
    <Container>
      <CardComponent
        photo={photo}
        projectName={projectName}
        description={description}
        url={url}
        repository={repository}
        // album={album}
        tags={tags}
      />
    </Container>
  )
}

function CardComponent({
  photo,
  projectName,
  description,
  url,
  repository,
//   album,
  tags,
}: CardProps & { tags: string[] }) {
  return (
    <CardContainer
      as={motion.div}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <Splash />
      <CardContent>
        <ProjectInfo>
          <ProjectTitle>{projectName}</ProjectTitle>

          <div>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <ProjectDescription>
            <Traducao tKey={description}/>

          </ProjectDescription>

          <ButtonGroup>
            {/* <Button href={album} target="_blank">Ver imagens ↗</Button> */}
            <Button href={url} target="_blank">Acessar site ↗</Button>
            <Button href={repository} target="_blank" className="secondary">
              Acessar Repositório ↗
            </Button>
          </ButtonGroup>
        </ProjectInfo>

      </CardContent>
        <Card as={motion.div} variants={cardVariants}>
          <ProjectImage src={photo} alt={`Imagem do projeto ${projectName}`} />
        </Card>
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
