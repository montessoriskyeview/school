import { SchoolList } from "../components/shared/ListText"
import { CanvasView } from "../components/shared/Canvas/CanvasView"
import { CollapseContainer } from "../components/shared/CollapseContainer"

export const Philosophy = () => {
  return (
    <CanvasView>
      <CollapseContainer
        title="Our Philosophy"
        content="At Montessori Skye View, we believe that every child is a unique and capable learner. Our classrooms are designed to be beautiful, stimulating spaces where children can explore at their own pace, develop independence, and master new skills. 
  Our teachers are passionate Montessori educators, trained to guide and support each child's individual journey of discovery."
      />
      <CollapseContainer
        title="The Montessori Difference"
        content={<SchoolList
          items={[
            "Student-Centered Learning: Our curriculum is tailored to meet the individual needs and interests of each child.",
            "Hands-on Activities: Children learn by doing, exploring a variety of materials and activities that spark curiosity and creativity.",
            "Mixed-Age Classrooms: Children learn from and collaborate with peers of different ages, fostering a sense of community and social responsibility.",
            "Emphasis on Practical Life Skills: Children develop important life skills like independence, concentration, and problem-solving through everyday activities.",
            "Peace Education: We cultivate a peaceful and respectful environment where children learn conflict resolution and social-emotional skills."
          ]}
        />}
      />
      <CollapseContainer
        title="Join Our Growing Community"
        content="We invite you to explore our website and learn more about the Montessori Method and the enriching educational experience we offer at Montessori Skye View. We look forward to welcoming your child to our vibrant learning community!"
      />
    </CanvasView>
  )
}