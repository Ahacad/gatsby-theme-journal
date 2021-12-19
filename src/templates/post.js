import * as React from "react";
import { graphql } from "gatsby";
import Layout from "src/components/Layout";
import Leftbar from "src/components/Leftbar";
import Rightbar from "src/components/Rightbar";
import tit from "ap-style-title-case";
import "./post.css";

const Post = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  console.log("HELLOHELO");
  console.log(post.html);

  const getCoverOrRandom = (useRandom = true) => {
    if (post.frontmatter.cover) {
      return `url(${post.frontmatter.cover})`;
    } else {
      return `url(https://source.unsplash.com/random)`;
    }
  };

  return (
    <>
      <Layout>
        <Leftbar />
        <div class="col-span-2 h-screen shadow-xl overflow-scroll no-scrollbar ">
          <div
            class="h-96 bg-cover bg-center relative"
            style={{
              backgroundImage: getCoverOrRandom(),
            }}
          >
            <div
              class="absolute bottom-0 w-full pb-10 px-8 text-white pt-20"
              style={{
                background: `rgb(0,0,0)`,
                background: `linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 75%, rgba(255,255,255,0) 100%)`,
              }}
            >
              <div class="text-3xl">{tit(post.frontmatter.title)}</div>
              <div class="text-xl text-gray-200">
                {post.frontmatter.description || post.excerpt}
              </div>
              <div class="mt-4">{post.frontmatter.date}</div>
            </div>
          </div>
          <div
            class="p-8 markdown"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
        </div>
        <Rightbar />
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "YYYY-MM-DD hh:mm:ss")
        title
        description
        cover
      }
    }
  }
`;

export default Post;
