import * as React from "react";
import Layout from "src/components/Layout";
import Leftbar from "src/components/Leftbar";
import Rightbar from "src/components/Rightbar";
import tit from "ap-style-title-case";
import { graphql, Link } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const PostCard = ({ post, index }) => {
  return (
    <div>
      <div class="hidden lg:flex w-full min-h-[10rem] hover:bg-gray-100 duration-500 cursor-pointer p-8 group border-b-2 border-gray-50 justify-between">
        <div class="flex flex-col justify-center pr-8">
          <div class="text-3xl group-hover:underline group-hover:text-blue-600 font-smeibold">
            {tit(post.node.frontmatter.title)}
          </div>
          <div class="text-xl mt-2">
            {post.node.frontmatter.description || post.node.excerpt}
          </div>
          <div class="text-md mt-2 font-montserrat">
            {post.node.frontmatter.date}
          </div>
        </div>
        <div class="shrink-0 w-60 bg-blue-30 flex flex-col justify-center">
          <img
            src={
              post.node.frontmatter.cover ||
              `https://source.unsplash.com/random?sig=${index}`
            }
            class="w-60 h-32 object-cover "
          />
        </div>
      </div>
      <div class="block lg:hidden">
        <div class="">
          <img
            src={
              post.node.frontmatter.cover ||
              `https://source.unsplash.com/random?sig=${index}`
            }
            class="w-full h-44 object-cover"
          />
        </div>
        <div class="p-4 mb-4 shadow">
          <div class="text-2xl font-semibold">
            {tit(post.node.frontmatter.title)}
          </div>
          <div class="mt-2">
            {post.node.frontmatter.description || post.node.excerpt}
          </div>
          <div class="mt-2">{post.node.frontmatter.date}</div>
        </div>
      </div>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <>
      <Layout>
        <Leftbar />
        <div class="h-screen col-span-4 lg:col-span-2 shadow-xl mt-6r no-scrollbar overflow-scroll">
          {posts.map((post, index) => {
            return (
              <Link to={post.node.fields.slug}>
                <PostCard post={post} index={index} />
              </Link>
            );
          })}
        </div>
        <Rightbar />
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query ArchiveQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          excerpt
          html
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            description
            cover
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
