import { InfoText } from "../components/shared/InfoText";
import { CanvasView } from "../components/shared/Canvas/CanvasView";

export const Home = () => {
  return (
    <CanvasView>
      <InfoText
        title="Montessori School Skye View"
        text="A Private Chez Nous School"
        titleVariant="h3"
      />
      <InfoText
        title="About us"
        text="Montessori Skye View is a new Montessori school dedicated to fostering a love of learning in children aged 3 and up. We believe in the power of the Montessori Method, an educational approach developed by Dr. Maria Montessori, which emphasizes self-directed exploration, hands-on activities, and a nurturing environment. Located in the northwest corner of Las Vegas, our beautiful Skye Canyon campus provides ample outdoor space for play and learning."
      />
    </CanvasView>
  )
}