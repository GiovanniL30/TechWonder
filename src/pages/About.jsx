import React from 'react'
import image from '../assets/about-picture.jpg'
import '../styles/about.css'

export default function About() {
  return (
    <div className='container'>
      <div className='about-container'>
        <div className='about-con'>
          <div className='about-img-container'>
            <img src={image} alt='About Us Image' />
          </div>
          <div className='about-info'>
            <h1>About</h1>
            <h3>
              At TechWonders Electronics, we're more than just a retailer of the
              latest gadgets and electronics. We're enthusiasts, explorers, and
              purveyors of innovation. Our journey began with a passion for
              technology and a desire to share the wonders it brings to everyday
              life.
            </h3>
          </div>
        </div>
        <div className='commitment'>
          <h1>Commitment</h1>
          <h3>
            Our commitment is simple: to provide our customers with access to
            the most advanced and exciting electronic products on the market.
            From smartphones that redefine communication to smart home solutions
            that make daily living effortless, we curate a diverse range of tech
            treasures.
          </h3>
        </div>
        <div className='faq'>
          <h1 className='faq-title'>FAQ</h1>
          <div className='question-container'>
            <div>
              <h1 className='question'>
                Do you offer warranty coverage for your electronics?
              </h1>
              <h5>
                Yes, we take pride in offering warranty coverage for most of our
                electronic products. The duration and terms of the warranty may
                vary depending on the item, so we recommend checking the
                product's specific warranty information on the product page.
                Rest assured, we stand behind the quality of our products, and
                our customer support team is always ready to assist you with any
                warranty-related inquiries
              </h5>
            </div>
            <div>
              <h1 className='question'>What payment methods do you accept?</h1>
              <h5>
                We accept a variety of payment methods to make your shopping
                experience convenient. These include major credit and debit
                cards such as Visa, MasterCard, American Express, as well as
                digital payment options like PayPal, Apple Pay, and Google Pay.
                You can select your preferred payment method during the checkout
                process.
              </h5>
            </div>
            <div>
              <h1 className='question'>
                How do I track my order after purchase?
              </h1>
              <h5>
                Tracking your order is easy! Once your order is processed and
                shipped, you will receive a confirmation email containing a
                tracking number and a link to the tracking page. You can use
                this information to monitor the status and location of your
                package as it makes its way to you. If you have any questions or
                encounter any issues with tracking your order, our customer
                support team is available to assist you.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
