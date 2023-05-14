import React from 'react'
import BottomContainerItem from './BottomContainerItem'
import './BottomContainer.css'
const productInfo = [
    {
        header: "Ambrosia From Nature ",
        desc: "Milk has been a major part of daily Indian meals for centuries.Consuming Milk regularly has ample benefits. Various studies prove that the intake of dairy products reduces the risk of childhood obesity and type 2 diabetes. Moreover, we source our milk from a mix of Desi Red Sindhi cows, desi Rathi cows, Gir & Jersey cows and Goat directly from the farmers, run it through 70 stringent tests for impurities and toxins and deliver it to you within 24-36 hours of milking. No preservatives, no milk powder or cream is added to the milk and the milk is not recombined in any form. We deliver the milk under the best cold chain right up to your doorstep. Health benefits: Milk products contain several nutrients and vitamins that aid in building strong bones and muscles. It even prevents ailments like osteoporosis and bone fracture.A study even states that when babies are fed with goat’s milk as the first protein after breast feeding",
        
        src: "./assets/images/milk.jpg"

    },
    {
        header: "Every Scoop Tastes Like Home",
        desc: "Product that we have made in collaboration with thousands of farmers. Understanding the age-old practice of Dahi making at home, we worked further on it to set the richest, creamiest and tastiest Dahi that every family would love to consume. Every scoop of our product is 100% natural, made from pure milk and delivered to your doorstep.",
        src: "./assets/images/curd.jpg"
    },
    {
        header: "Fresh Paneer Made From Cow Milk ",
        desc: "Our Taaza paneer stands true to its name - it is delectably fresh and it melts in your mouth! We curated this delectable experience for you through continuous feedback from hundreds of our customers. The paneer is made from farm-fresh cow milk and in the most natural home-based paneer making techniques. We then pack and deliver it to your doorstep fresh.",
        src: "./assets/images/freshpaneer.jpg"
    },

]

const BottomContainer = () => {
    return (
        <div className='product'>
            {
                productInfo.map((item, id) => <BottomContainerItem key={id} header={item.header} desc={item.desc} src={item.src} />)
            }
        </div>
    )
}

export default BottomContainer
