import React from 'react'
import Navbar from '../components/Navbar'
import HeaderSection from '../components/BlogDetailsComponets/HeaderSection'
import ArticleSection from '../components/BlogDetailsComponets/ArticleSection'
import RelatedBlogs from '../components/BlogDetailsComponets/RelatedBlogs'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
 
 
const BlogDetail = () => {
  return (
    <>
        <Navbar2/>
        <HeaderSection/>
        <ArticleSection/>
        <RelatedBlogs/>
        {/* <Footer/> */}
    </>
  )
}

export default BlogDetail