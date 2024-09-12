import { InfoText } from '../components/shared/InfoText';
import { CanvasView } from '../components/shared/Canvas/CanvasView';

export const Home = () => {
  return (
    <CanvasView>
      <InfoText
        title='This site is no longer active'
        text=''
        titleVariant='h3'
      />
      {/* <InfoText
        title='Contact'
        text='(760) 534-0671'
        // text='Montessori Skye View is a new Montessori school dedicated to fostering a love of learning for grades pre-k through 5th. We believe in the power of the Montessori Method, an educational approach developed by Dr. Maria Montessori, which emphasizes self-directed exploration, hands-on activities, and a nurturing environment. Located in the northwest corner of Las Vegas, our beautiful Skye Canyon campus provides ample outdoor space for play and learning.'
      /> */}
    </CanvasView>
  );
};
