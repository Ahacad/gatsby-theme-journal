import * as React from "react";
import { graphql } from "gatsby";
import Layout from "src/components/Layout";
import Leftbar from "src/components/Leftbar";
import Rightbar from "src/components/Rightbar";
import "./post.css";

const Post = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  console.log("HELLOHELO");
  console.log(post.html);
  return (
    <>
      <Layout>
        <Leftbar />
        <div
          class="col-span-2 p-8 h-screen shadow-xl overflow-scroll no-scrollbar"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
        <Rightbar />
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;

export default Post;
