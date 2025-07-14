import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { CollapseContainer } from '../components/shared/CollapseContainer';
import { SchoolList } from '../components/shared/ListText';
import { Typography } from '../components/shared/Typography';
import { ContentContainer } from '../components/shared/ContentContainer';

export const FaqView = () => {
  return (
    <CanvasView>
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-yellow)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-4xl)',
          }}
        >
          ❓ Frequently Asked Questions
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
          }}
        >
          Find answers to common questions about Montessori Skye View
        </Typography>
      </ContentContainer>

      <CollapseContainer
        title="👔 Is there an enforced dress code?"
        content={
          <SchoolList
            items={[
              'Appropriate attire for movement: Clothes should allow for participation in physical activities without restrictions.',
              'Safe footwear: Shoes should be secure and appropriate for the environment (no flip flops, high heels, etc.).',
              'Minimize distractions: Avoid clothing with offensive language, symbols, or overly revealing clothing.',
            ]}
          />
        }
        spacing="lg"
      />
      <CollapseContainer
        title="🍎 Is lunch provided or should my child bring their own?"
        content={
          "Students can bring a healthy lunch from home or choose our nutritious school meal option for $3 per day. This fee will be conveniently added to your monthly school fee statement. We understand that forgetting a lunch happens, and our program ensures your child has a healthy option available each day they're at school. Lunch options include ham, cheese and crackers or a peanut butter and jelly sandwich along with fresh fruit (apple, banana, orange) and vegetables (carrot sticks, cucumber)."
        }
        spacing="lg"
      />
      <CollapseContainer
        title={'🏠 What does "Chez Nous" mean?'}
        content={
          'Chez Nous (pronounced shay new) means "our house/our place" in French!'
        }
        spacing="lg"
      />
      <CollapseContainer
        title="📚 What kind of curriculum is available?"
        content={`We offer quality curriculum that meets Nevada state standards for each student's grade level, taught by their instructor in the classroom.`}
        spacing="lg"
      />
      <CollapseContainer
        title="🏫 How does this compare to homeschooling or the Clark County School District?"
        content={
          'We are a microschool. A microschool is the reimagining of the one-room schoolhouse, where class sizes are around 15 students of varying ages, and the schedule and curriculum are tailored to fit the needs of each class. Many describe microschools as a "mid-point" between traditional schooling and homeschooling. According to the state of Nevada, our students are homeschooled. We provide you with the proper documentation to file with the state to declare your child "homeschooled". We facilitate your children in their learning.'
        }
        spacing="lg"
      />
      <CollapseContainer
        title={'🤝 What is your policy on "bad behavior"?'}
        content={
          'The Montessori method focuses on teaching children consequences for their actions and emphasizes a strong, clear boundary along with guidance and responsibility for their actions. Parents are notified of unacceptable behavior, and repeated issues may lead to removal from the program.'
        }
        spacing="lg"
      />
      <CollapseContainer
        title="💳 What if we need to withdraw? What is your refund policy?"
        content={
          <>
            <Typography>
              If a student's enrollment is terminated for any reason, the
              following refund policy will apply:
            </Typography>
            <SchoolList
              items={[
                "Tuition will be refunded on a prorated basis for the month in which the school receives official notice of the student's withdrawal or cancellation, regardless of the number of days the student attended classes during that month.",
                "All refund requests must be submitted in writing to the school administration within 30 days of the student's last day of attendance.",
                'Refunds may be subject to processing fees or other applicable deductions.',
                'The school reserves the right to make exceptions to this policy in certain circumstances, such as in cases of extended illness or family emergencies.',
              ]}
            />
            <Typography>
              Please contact the school administration for any questions
              regarding this policy or the enrollment process.
            </Typography>
          </>
        }
        spacing="lg"
      />

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--secondary-purple)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          📞 Still Have Questions?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
          }}
        >
          We're here to help! Contact us directly and we'll be happy to answer
          any additional questions you may have about our Montessori program.
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};
