import Ally from './images/teachers/ally.webp';
import Hannah from './images/teachers/hannah.webp';

export interface TeacherConfig {
  name: string;
  title: string;
  image: string;
  bio: string;
}

export const teacherConfig: TeacherConfig[] = [
  {
    name: 'Mrs. Ally',
    title: 'Pre-K Guide',
    image: Ally,
    bio: "I'm Mrs. Ally! Born and raised in Las Vegas attended arbor view high school! Currently 29 years old. I attended BYUi for early childhood special education, Served as a missionary for the church of Jesus Christ of Latter-day Saints in Boston Massachusetts. Married and I have 4 young, energetic and amazing kids. We love baseball LETS GO DODGERS!!!! All my kids are involved in sports. We love being outside in nature.  I’ve served 2 years in primary with the children in our church. I’ve have been a nanny for many years. Kids bring so much joy into our lives and I just hope I can bring joy into their daily life as well./nI do tend to lean towards a very healthy lifestyle, high protein and exercising with my kids in our garage gym! But do love a Coke Zero!",
  },
  {
    name: 'Mrs. Hannah',
    title: 'Director',
    image: Hannah,
    bio: 'Born and raised in Palm Springs, California, I was fortunate to attend school in Santa Barbara, where I played on the tennis team, and later completed my degree in Marriage and Family Studies in Rexburg, Idaho, where I also met my husband, Gavin. I went on to earn three teaching certificates in Relationship Education as well as Toddler Years Education.\n After working with couples and parents, I realized my true passion was leaning more toward teaching children. I began by teaching my oldest son’s preschool class, and that’s where I fell in love with Maria Montessori and her philosophy.\nOver the years, I taught in Utah, Arkansas, and Las Vegas for a combined six years and discovered just how great the need is for quality education and childcare everywhere—especially as a mother of four myself. From that passion, Montessori Skye View was born!\nWe opened in the fall of 2024, and we are so grateful for our students, families, and all of their support!',
  },
];
