import React from 'react'
import Carousel from '../Components/Home/Carousel'
import HomeAbout from '../Components/Home/HomeAbout'
import GymType from '../Components/Home/GymType'
import Feature from '../Components/Home/Feature'
import Category from '../Components/Home/Category'
import BmiCalculate from '../Components/Home/BmiCalculate'
import Trainer from '../Components/Home/Trainer'
import Testimonial from '../Components/Home/Testimonial'

const Home = () => {
    return (
        <>

            <Carousel />
            <GymType />
            <HomeAbout />

            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-4 p-0">
                        <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: 300 }}>
                            <i className="flaticon-training display-3 text-primary mr-3" />
                            <div className>
                                <h2 className="text-white mb-3">Progression</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="d-flex align-items-center bg-primary text-white px-5" style={{ minHeight: 300 }}>
                            <i className="flaticon-weightlifting display-3 text-secondary mr-3" />
                            <div className>
                                <h2 className="text-white mb-3">Workout</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: 300 }}>
                            <i className="flaticon-treadmill display-3 text-primary mr-3" />
                            <div className>
                                <h2 className="text-white mb-3">Nutrition</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Feature/>
            <Category/>
            {/* <BmiCalculate/> */}
            <Trainer/>
            <Testimonial/>


        </>
    )
}

export default Home