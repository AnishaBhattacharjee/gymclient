import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FetchServiceData } from '../../redux/ServiceSlice'

const Category = () => {
  const { service_data } = useSelector((state) => state?.service)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchServiceData())
  }, [])

  console.log("service", service_data);

  return (
    <>
      <div className="container pt-5 team mx-auto">
        <div className="d-flex flex-column text-center mb-5 justify-content-center">
          <h4 className="text-primary font-weight-bold">Our Trainings</h4>
          <h4 className="display-3 font-weight-bold">Choose From Our Services</h4>
        </div>
        <div className="row">
          {
            service_data?.data?.map((sItem, index) => {
              if (sItem.status === '1') {
                return (
                  <>
                    <div className="col-lg-4 col-md-6 mb-5">
                      <div className="card border-0 bg-secondary text-center text-white">
                        <img className="card-img-top" src={`http://localhost:7700/${sItem.image}`} alt />
                        <div className="card-body bg-secondary">
                          <h3 className="card-title text-primary">{sItem.service_name}</h3>
                          <p className="card-text" style={{fontSize:"20px"}}>Trainer : <b>{sItem?.trainer_details[0]?.name}</b></p>
                          <Link to={`/serviceDetails/${sItem._id}`} className="btn btn-outline-light px-4">Explore</Link>
                        </div>
                      </div>
                    </div>
  
                  </>
                )
              }
              
            })
          }
        </div>
      </div>
    </>
  )
}

export default Category