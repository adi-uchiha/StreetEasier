import React from 'react'

import img from '../../assets/apartments/dummyApartmentImage.jpg'

function Apartment({
	address,
	pricePerMonth,
	numBedRooms,
	numBathrooms,
	numPeopleInterested,
}) {
	return (
		<div className="bg-secondary text-white flex flex-row space-y-2 space-x-4 rounded-xl shadow-lg h-36 ">
			<img
				src={img}
				alt="Apartment for rent"
				className="w-32 block object-cover rounded-[5.5rem] rounded-tl-xl rounded-bl-xl hover:scale-110 overflow-hidden"
			/>
			<div className="flex flex-col text-xs space-y-2 pb-2">
				<h1 className="text-lg font-extrabold mb-2">{`$${pricePerMonth}/mo`}</h1>

				<p>{address}</p>
				<h3>{`There are currently ${numPeopleInterested} in this property`}</h3>
				<p className="inline-block mr-2 text-gray-500">{`${numBedRooms} Bedrooms and ${numBathrooms} Bathrooms`}</p>
			</div>
		</div>
	)
}

export default Apartment
