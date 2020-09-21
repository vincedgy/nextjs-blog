import React from "react";
import Head from "next/Head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import marked from "marked";

const Post = ({ slug, htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{data.title.toUpperCase()}</title>
        <meta name="description" content={data.description} />
      </Head>
      <Container style={{ marginTop: "3rem" }}>
        <Jumbotron>
          <h1>Title : {data.title}</h1>
          <h3 style={{ color: "gray" }}>{data.description}</h3>
          <h6>
            <small>{slug}</small>
          </h6>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </Jumbotron>
      </Container>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((f) => ({
    params: {
      slug: f.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();
  const parsedMarkdown = matter(markdownWithMetadata);
  const htmlString = marked(parsedMarkdown.content);
  return {
    props: {
      slug,
      data: parsedMarkdown.data,
      htmlString,
    },
  };
};

export default Post;
