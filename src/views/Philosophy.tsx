import { SchoolList } from "../components/shared/ListText"
import { CanvasView } from "../components/shared/Canvas/CanvasView"
import { CollapseContainer } from "../components/shared/CollapseContainer"
import { InfoText } from '../components/shared/InfoText';
import { philosophyContent } from '../i18n/pages/philosophy';

export const Philosophy = () => {
  return (
    <CanvasView>
      <InfoText
        title={philosophyContent.introTitle}
        text={philosophyContent.introText}
        spacing="lg"
        titleVariant="h2"
      />
      <CollapseContainer
        title={philosophyContent.differenceTitle}
        content={
          <SchoolList items={philosophyContent.differenceItems} />
        }
        spacing="lg"
      />
      <CollapseContainer
        title={philosophyContent.environmentTitle}
        content={philosophyContent.environmentText}
        spacing="lg"
      />
      <InfoText
        title={philosophyContent.joinTitle}
        text={philosophyContent.joinText}
        spacing="lg"
        titleVariant="h3"
      />
    </CanvasView>
  );
};