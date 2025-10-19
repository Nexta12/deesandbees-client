import SubTitle from "@components/subTitle/SubTitle"
import styles from "./experts.module.scss"
import HeadingText from "@components/headingText/HeadingText"
import ExpertCard from "./expertCard/ExpertCard"
import e1 from "@assets/img/e1.png"
import e2 from "@assets/img/e2.png"
import e3 from "@assets/img/e3.png"

const Experts = () => {
  return (
    <div className={styles.container} >
          <div className={styles.textContent}>
             <SubTitle font="script" >Chefs</SubTitle>
             <HeadingText>Meet our Experts</HeadingText>
              <small>At Happies, our passionate team turns every meal and event into a joyful experience. Meet the <br/> people behind the moments you love.</small>
          </div>

          <div className={styles.cardContent}>
             <ExpertCard exertImg={e1} expertName="Jessica John" buttonText="CHEF" description="Explain ten man uncivil engaged conduct. Am likewise betrayed as declared absolute do." />

             <ExpertCard exertImg={e2} expertName="Jessica John" buttonText="COOK" description="Explain ten man uncivil engaged conduct. Am likewise betrayed as declared absolute do." isFeatured={true} className={styles.featuredCard} />

             <ExpertCard exertImg={e3} expertName="Jessica John" buttonText="PATISSIER" description="Explain ten man uncivil engaged conduct. Am likewise betrayed as declared absolute do." />
          </div>
    </div>
  )
}

export default Experts