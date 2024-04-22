import { CanvasView } from "../components/shared/Canvas/CanvasView"
import { CollapseContainer } from "../components/shared/CollapseContainer"
import { SchoolList } from "../components/shared/ListText"

export const FaqView = () => {
  return (
    <CanvasView>
      <CollapseContainer
        title="Dress code"
        content={
          <SchoolList
            items={[
              "Appropriate attire for movement: Clothes should allow for participation in physical activities without restrictions.",
              "Safe footwear: Shoes should be secure and appropriate for the environment (no flip flops, high heels, etc.).",
              "Minimize distractions: Avoid clothing with offensive language, symbols, or overly revealing clothing.",
            ]}
          />
        }
      />
      <CollapseContainer
        title="Lunch"
        content={"Students can bring a healthy lunch from home or choose our nutritious school meal option for $3 per day. This fee will be conveniently added to your monthly school fee statement. We understand that forgetting a lunch happens, and our program ensures your child has a healthy option available each day they’re at school. Lunch options include ham, cheese and crackers or a peanut butter and jelly sandwich along with fresh fruit (apple, banana, orange) and vegetables (carrot sticks, cucumber)."}
      />
      <CollapseContainer
        title="Curriculum"
        content={"We provide quality grade-level curriculum for your child, taught by their teacher in the classroom."}
      />
      <CollapseContainer
        title="How does this compare to homeschooling or the Clark county school district?"
        content={"We are a microschool. A microschool is the reimagining of the one-room schoolhouse, where class sizes are around 15 students of varying ages, and the schedule and curriculum are tailored to fit the needs of each class. Many describe microschools as a \"mid-point\" between traditional schooling and homeschooling. According to the state of Nevada, our students are homeschooled. We provide you with the proper documentation to file with the state to declare your child \"homeschooled\". We provide teachers to help facilitate your children in their learning."}
      />
    </CanvasView>
  )
}