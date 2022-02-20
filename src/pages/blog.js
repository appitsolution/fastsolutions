import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import BlogComponent from "../components/BlogComponent"
import FeedbackMail from "../components/FeedbackMail"
import Footer from "../components/Footer"
const blog = () => {
  return (
    <>
      <Header />
      <Hero title={"Blog"} buttons={[]} />
      <BlogComponent />
      <FeedbackMail />
      <Footer />
    </>
  )
}
export default blog
