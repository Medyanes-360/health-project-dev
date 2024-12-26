import React from 'react'
import { ClinicOverviewForm } from '../clinicOverviewForm'
import LocationMaker from '../locationMaker'

const ClinicInformation = () => {
  return (
    <div className="flex gap-4 p-[1rem]">
    {" "}
    <ClinicOverviewForm />
    <LocationMaker />
   </div>  )
}

export default ClinicInformation