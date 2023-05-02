import React from 'react'

function Amenities() {
    return (
        <div>
            <form className='flex flex-wrap justify-between items-center gap-7 font-semibold'>
                <label className="mb-2 text-gray-500 flex items-center gap-3">
                    Fully Furnished:
                    <input
                    name="fullyFurnished"
                    type="checkbox"
                    />
                </label>
                <br />

                <label className="mb-2 text-gray-500 flex items-center gap-3">
                    Lift:
                    <input
                    name="Lift"
                    type="checkbox"
                    />
                </label>
                <br />

                <label className="mb-2 text-gray-500 flex items-center gap-3">
                    Garage:
                    <input
                    name="garage"
                    type="checkbox"
                    />
                </label>
                <br />

                <label className="mb-2 text-gray-500 flex items-center gap-3">
                    Quiet Surroundings:
                    <input
                    name="quietSurroundings"
                    type="checkbox"
                    />
                </label>
                <br />

                <label className="mb-2 text-gray-500 flex items-center gap-3">
                    Bath Hub:
                    <input
                    name="bathHub"
                    type="checkbox"
                    />
                </label>
                <br />

                <label className="mb-2 text-gray-500 flex items-center gap-3">
                    No Smoking Rooms:
                    <input
                    name="noSmokingRooms"
                    type="checkbox"
                    />
                </label>
                <br />

                <label className="mb-2 text-gray-500 flex items-center gap-3">
                    Fire Extinguish:
                    <input
                    name="fireExtinguish"
                    type="checkbox"
                    />
                </label>
                <br />

                <label className="mb-2 text-gray-500 flex items-center gap-3">
                    Home Security:
                    <input
                    name="homeSecurity"
                    type="checkbox"
                    />
                </label>
                <br />

                <label className="mb-2 text-gray-500 flex items-center gap-3">
                    AC Rooms:
                    <input
                    name="acRooms"
                    type="checkbox"
                    />
                </label>
                <br />

                <label className="mb-2 text-gray-500 flex items-center gap-3">
                    High Speed Wifi:
                    <input
                    name="highSpeedWifi"
                    type="checkbox"
                    />
                </label>
                <br />

                <label className="mb-2 text-gray-500 flex items-center gap-3">
                    Oven:
                    <input
                    name="oven"
                    type="checkbox"
                    />
                </label>
                <br />
                
            </form>
        </div>
    )
}

export default Amenities
