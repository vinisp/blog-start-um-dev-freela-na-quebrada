import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostData }) {
  return (
    <Layout home>
      <div className="container">
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p></p>
          <p>
            No começo pensei em criar um blog focado em "Dicas para desenvolver
            lojas e plataformas com ReactJS, React Native NextJs e Node js" e
            claro, falar muito sobre Javascript, só que passado alguns dias
            também senti uma necessidade de abordar outros temas dos quais sofro
            e tenho experiência para escrever, essas ideias só me vieram a mente
            após passar aquela euforia que sinto em cada começo de projeto,
            então além de falar sobre essas tecnologias também vou falar de
            temas muito importantes na vida do desenvolvedor e do ser humano,
            serão temas ligados a motivação pessoal, planejamento e algumas
            questões filosoficas e socias que cercam nossa vida.
          </p>
        </section>
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map(({ id, date, title, resume }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>

              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <p>{resume} </p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData,
    },
  };
}
