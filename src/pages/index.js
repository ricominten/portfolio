import React from 'react';
import {Link, graphql} from 'gatsby';

import Bio from '../components/Bio';
import Border from '../components/Border';
import Divider from '../components/Divider';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import {rhythm} from '../utils/typography';

const BlogIndex = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
        <React.Fragment>
            {/*<Border />*/}
            <Layout>
                <header>
                    <SEO title='All posts'/>
                    <Bio />
                </header>
                <Divider />
                {/*<main>*/}
                {/*    {posts.map(({node}, index) => {*/}
                {/*        const title = node.frontmatter.title || node.fields.slug*/}
                {/*        console.log(index);*/}
                {/*        return index % 2 === 0 ? (*/}
                {/*            <article key={node.fields.slug}>*/}
                {/*                <header>*/}
                {/*                    <h3*/}
                {/*                        style={{*/}
                {/*                            marginBottom: rhythm(1 / 4),*/}
                {/*                        }}*/}
                {/*                    >*/}
                {/*                        <Link style={{boxShadow: `none`}} to={node.fields.slug}>*/}
                {/*                            {title}*/}
                {/*                        </Link>*/}
                {/*                    </h3>*/}
                {/*                    <small>{node.frontmatter.date}</small>*/}
                {/*                </header>*/}
                {/*                <section>*/}
                {/*                    <p*/}
                {/*                        dangerouslySetInnerHTML={{*/}
                {/*                            __html: node.frontmatter.description || node.excerpt,*/}
                {/*                        }}*/}
                {/*                    />*/}
                {/*                </section>*/}
                {/*            </article>*/}
                {/*        ) : null*/}
                {/*    })}*/}
                {/*</main>*/}
                {/*<Divider />*/}
                {/*<main>*/}
                {/*    {posts.map(({node}, index) => {*/}
                {/*        const title = node.frontmatter.title || node.fields.slug*/}
                {/*        return index % 2 === 1 ? (*/}
                {/*            <article key={node.fields.slug}>*/}
                {/*                <header>*/}
                {/*                    <h3*/}
                {/*                        style={{*/}
                {/*                            marginBottom: rhythm(1 / 4),*/}
                {/*                        }}*/}
                {/*                    >*/}
                {/*                        <Link style={{boxShadow: `none`}} to={node.fields.slug}>*/}
                {/*                            {title}*/}
                {/*                        </Link>*/}
                {/*                    </h3>*/}
                {/*                    <small>{node.frontmatter.date}</small>*/}
                {/*                </header>*/}
                {/*                <section>*/}
                {/*                    <p*/}
                {/*                        dangerouslySetInnerHTML={{*/}
                {/*                            __html: node.frontmatter.description || node.excerpt,*/}
                {/*                        }}*/}
                {/*                    />*/}
                {/*                </section>*/}
                {/*            </article>*/}
                {/*        ) : null*/}
                {/*    })}*/}
                {/*</main>*/}
                {/*<footer>*/}
                {/*    © {new Date().getFullYear()}*/}
                {/*</footer>*/}
            </Layout>
        </React.Fragment>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
	site {
	  siteMetadata {
		title
	  }
	}
	allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
	  edges {
		node {
		  excerpt
		  fields {
			slug
		  }
		  frontmatter {
			date(formatString: "MMMM DD, YYYY")
			title
			description
		  }
		}
	  }
	}
  }
`
