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
          Find answers to common questions about our parent cooperative and
          active participation requirements
        </Typography>
      </ContentContainer>

      <CollapseContainer
        title="🤝 What does it mean that this is a parent cooperative?"
        content={
          <>
            <Typography sx={{ marginBottom: 'var(--spacing-md)' }}>
              A parent cooperative means that families are active partners in
              their child's education, not just customers. This is a homeschool
              operation where parents are required participants, not optional
              volunteers.
            </Typography>
            <SchoolList
              items={[
                'Parents are REQUIRED to contribute monthly - this is not optional',
                'Each family must participate in classroom activities, maintenance, or administrative support',
                'Parents help make decisions about curriculum, policies, and operations',
                'Families share responsibility for creating and maintaining our learning environment',
                'This collaborative model keeps costs lower while building stronger community connections',
                'Parents who cannot actively participate should consider traditional private schools instead',
              ]}
            />
          </>
        }
        spacing="lg"
      />

      <CollapseContainer
        title="📋 What are the parent participation requirements?"
        content={
          <>
            <Typography sx={{ marginBottom: 'var(--spacing-md)' }}>
              <strong>IMPORTANT:</strong> Parent participation is mandatory, not
              optional. Every family must contribute monthly to maintain
              membership.
            </Typography>
            <SchoolList
              items={[
                'Complete monthly Parent Contribution Form specifying how you will help',
                'Choose from: Time (teaching/volunteering), Resources (funds/materials), or Other contributions',
                'Minimum 20 hours of volunteer work per semester (40 hours per year)',
                'Participate in monthly member meetings and decision-making',
                'Help with classroom activities, events, maintenance, or administration',
                'Alternative: Pay $25/hour in lieu of volunteer work (limited availability)',
                'Families who do not participate will be asked to leave the cooperative',
              ]}
            />
          </>
        }
        spacing="lg"
      />

      <CollapseContainer
        title="🏠 How does the homeschool cooperative model work?"
        content={
          <>
            <Typography sx={{ marginBottom: 'var(--spacing-md)' }}>
              We operate as a homeschool cooperative, which means parents are
              legally homeschooling their children while participating in our
              collaborative learning community.
            </Typography>
            <SchoolList
              items={[
                'Parents file homeschool documentation with Nevada state (we provide guidance)',
                'Children attend our learning center 2-5 days per week depending on program',
                'Parents supplement at home and participate actively in the cooperative',
                'Families share teaching responsibilities, administrative tasks, and facility maintenance',
                'This is NOT a drop-off program - parents must be engaged partners',
                'We provide curriculum, materials, and professional guidance',
                'Parents contribute their skills, time, and expertise to benefit all children',
              ]}
            />
          </>
        }
        spacing="lg"
      />

      <CollapseContainer
        title="❗ Is this program right for my family?"
        content={
          <>
            <Typography sx={{ marginBottom: 'var(--spacing-md)' }}>
              Our cooperative model works best for families who want to be
              actively involved in their child's education. Please consider
              these requirements carefully:
            </Typography>
            <SchoolList
              items={[
                "✅ You want to be an active partner in your child's education",
                '✅ You can commit time each month for volunteer work or contributions',
                "✅ You're comfortable with homeschooling legal requirements",
                '✅ You want to build community with other engaged families',
                '✅ You can attend monthly meetings and participate in decisions',
                '❌ You prefer a traditional drop-off school experience',
                '❌ You cannot commit to monthly participation requirements',
                '❌ You want minimal parent involvement in school operations',
              ]}
            />
            <Typography sx={{ marginTop: 'var(--spacing-md)' }}>
              If you answered "❌" to any items, a traditional private school
              may be a better fit for your family.
            </Typography>
          </>
        }
        spacing="lg"
      />

      <CollapseContainer
        title="💰 How does cooperative membership save money?"
        content={
          <>
            <Typography sx={{ marginBottom: 'var(--spacing-md)' }}>
              Our cooperative model significantly reduces costs compared to
              traditional private schools because families share the work and
              responsibilities.
            </Typography>
            <SchoolList
              items={[
                'Lower membership fees because parents provide labor and expertise',
                'Shared costs for materials, supplies, and facility maintenance',
                'Parent volunteers reduce need for paid staff in many areas',
                'Families contribute skills (teaching, maintenance, administration) instead of paying for services',
                'Group purchasing power for educational materials and supplies',
                'Community fundraising and resource sharing',
                "Every hour you volunteer directly reduces your family's costs",
              ]}
            />
          </>
        }
        spacing="lg"
      />

      <CollapseContainer
        title="🎓 What if I don't have teaching experience?"
        content={
          'No teaching experience required! We provide training and match families with opportunities that fit their skills and comfort level. You might help with art projects, garden maintenance, snack coordination, administrative tasks, or simply assist in the classroom. Every family has something valuable to contribute, and we help you find the best way to participate.'
        }
        spacing="lg"
      />

      <CollapseContainer
        title="⏰ What if I work full-time?"
        content={
          <>
            <Typography sx={{ marginBottom: 'var(--spacing-md)' }}>
              We understand that many parents work full-time, and we offer
              flexible ways to meet participation requirements:
            </Typography>
            <SchoolList
              items={[
                'Evening and weekend volunteer opportunities available',
                'Take-home projects that can be done on your schedule',
                'Administrative tasks that can be done remotely',
                'Contribute resources or materials instead of time',
                'Partner with other families to share responsibilities',
                'Limited option to pay $25/hour in lieu of volunteer work',
                'However, some level of participation is still required - this is not a traditional daycare',
              ]}
            />
          </>
        }
        spacing="lg"
      />

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
          "Students can bring a healthy lunch from home or choose our nutritious learning center meal option for $3 per day. This fee will be conveniently added to your monthly learning center fee statement. We understand that forgetting a lunch happens, and our program ensures your child has a healthy option available each day they're at the learning center. Lunch options include ham, cheese and crackers or a peanut butter and jelly sandwich along with fresh fruit (apple, banana, orange) and vegetables (carrot sticks, cucumber)."
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
        title="🏫 How does this compare to traditional schools or regular homeschooling?"
        content={
          <>
            <Typography sx={{ marginBottom: 'var(--spacing-md)' }}>
              We operate as a homeschool cooperative, which is different from
              both traditional schools and solo homeschooling:
            </Typography>
            <SchoolList
              items={[
                '<strong>vs. Traditional Schools:</strong> Parents are required active participants, not customers. Families share teaching, administrative, and maintenance responsibilities.',
                '<strong>vs. Solo Homeschooling:</strong> You get community support, professional guidance, and shared resources while maintaining homeschool flexibility.',
                '<strong>vs. Private Schools:</strong> Much lower costs because parents provide labor and expertise instead of paying for all services.',
                'Legally, your child is homeschooled in Nevada - we provide documentation and guidance for state requirements.',
                'Small class sizes (around 15 students) with mixed ages, like a one-room schoolhouse.',
                'Curriculum and schedule tailored to each class with parent input and involvement.',
                'This is a collaborative learning community, not a drop-off educational service.',
              ]}
            />
          </>
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
                "Tuition will be refunded on a prorated basis for the month in which the learning center receives official notice of the student's withdrawal or cancellation, regardless of the number of days the student attended classes during that month.",
                "All refund requests must be submitted in writing to the learning center administration within 30 days of the student's last day of attendance.",
                'Refunds may be subject to processing fees or other applicable deductions.',
                'The learning center reserves the right to make exceptions to this policy in certain circumstances, such as in cases of extended illness or family emergencies.',
              ]}
            />
            <Typography>
              Please contact the learning center administration for any
              questions regarding this policy or the enrollment process.
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
