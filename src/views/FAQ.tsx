import { CanvasView } from "../components/shared/Canvas/CanvasView"
import { CollapseContainer } from "../components/shared/CollapseContainer"
import { SchoolList } from "../components/shared/ListText"

export const FaqView = () => {
  return (
    <CanvasView>
      <CollapseContainer
        title="What are your student to teacher ratios for summer?"
        content={"Our ratio is between 8 and 12 children per teacher for this upcoming summer. The ratio will depend on ages of the children and other factors."}
      />
      <CollapseContainer
        title="Does your summer program offer 3-day schedules?"
        content={"We are willing to prorate a shortened camp week if the full four-day schedule doesn't work for your family's summer schedule."}
      />
      <CollapseContainer
        title="Are children separated into age groups in your summer program?"
        content={"The day will include dedicated blocks for activities tailored to different age groups as well as different interests. A majority of our students and campers are 6 and under and Montessori embraces mixed age classrooms."}
      />
      <CollapseContainer
        title="Is there an enforced dress code?"
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
        title="Is lunch provided or should my child bring their own?"
        content={"Students can bring a healthy lunch from home or choose our nutritious school meal option for $3 per day. This fee will be conveniently added to your monthly school fee statement. We understand that forgetting a lunch happens, and our program ensures your child has a healthy option available each day they’re at school. Lunch options include ham, cheese and crackers or a peanut butter and jelly sandwich along with fresh fruit (apple, banana, orange) and vegetables (carrot sticks, cucumber)."}
      />
      <CollapseContainer
        title={"What does \"Chez Nous\" mean?"}
        content={"Chez Nous (pronounced shay new) means \"our house/our place\" in French!"}
      />
      <CollapseContainer
        title="What kind of curriculum is available?"
        content={"We provide quality grade-level curriculum for your child, taught by their teacher in the classroom."}
      />
      <CollapseContainer
        title="How does this compare to homeschooling or the Clark County School District?"
        content={"We are a microschool. A microschool is the reimagining of the one-room schoolhouse, where class sizes are around 15 students of varying ages, and the schedule and curriculum are tailored to fit the needs of each class. Many describe microschools as a \"mid-point\" between traditional schooling and homeschooling. According to the state of Nevada, our students are homeschooled. We provide you with the proper documentation to file with the state to declare your child \"homeschooled\". We provide teachers to help facilitate your children in their learning."}
      />
      <CollapseContainer
        title={"What is your policy on \"bad behavior\"?"}
        content={"The Montessori method focuses on teaching children consequences for their actions and emphasizes a strong, clear boundary along with guidance and responsibility for their actions. Parents are notified of unacceptable behavior, and repeated issues may lead to removal from the program."}
      />
    </CanvasView>
  )
}