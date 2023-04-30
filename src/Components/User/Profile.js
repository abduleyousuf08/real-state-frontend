import React, { useContext, useState } from "react";
import {BsDashLg} from 'react-icons/bs'
import {AiFillCamera} from 'react-icons/ai'
import {MdModeEditOutline} from 'react-icons/md'
import { AuthContext } from "../../Context/AuthContext";
import defaultProfile from '../../Assets/Profile.jpg'


function Profile() {
    const { 
            user, 
            editProfile,
            updateProfile,
            updateUserProfile 
        } = useContext(AuthContext)
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);

    };

    const handleSaveClick = async () => {
        setIsEditing(false);

        let requestBody = {
            name: updateProfile.name || user.name,
            phone: updateProfile.phone || user.phone,
            address: updateProfile.address || user.address,
        };
        
        // If an image has been selected, read the image file and create a requestBody object with the "image" field
        if (updateProfile.image) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(updateProfile.image);
            
            fileReader.onload = async () => {
                try {
                    const base64Image = fileReader.result.split(',')[1];
    
                    requestBody = {
                        ...requestBody,
                        image: base64Image
                    };
    
                    await editProfile(requestBody);
                } catch (error) {
                    console.log(error);
                }
            };
        } else{
            await editProfile(requestBody);
        }
        
    };


    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        updateUserProfile({ ...updateProfile, image: selectedImage });

        console.log(selectedImage)
        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImagePreview(event.target.result);
            };
            reader.readAsDataURL(selectedImage);
        
        } else {
            setImagePreview(null);
        }
    }

    return (
        <div className='h-full p-10'>
            <div>
                <h2 className='flex gap-3 items-center text-amber-400 font-bold text-xl'> <BsDashLg className="fill-current " style={{ strokeWidth: '3px' }}/>Profile </h2>
                <div className="flex p-10 mt-10 gap-10 ml-16">
                    
                    <div>
                        {imagePreview ? (
                            <img src={imagePreview} className='w-72 border rounded-lg object-fit' alt=''/>
                        ): (
                            <img src={user?.image.url || defaultProfile} className='w-72 border rounded-lg object-fit' alt=''/>
                        )}
                        <label htmlFor="profile-photo" className="absolute top-20 mt-20 ml-5 cursor-pointer">
                            <AiFillCamera className="h-6 w-6 fill-current" style={{strokeWidth:'2px'}}/>
                        </label>
                        <input type="file" id="profile-photo" className="absolute opacity-0" name="image" onChange={handleImageChange}/>
                    </div>
                    <div className="mt-4 flex flex-col gap-5">
                        <div className="flex flex-col">
                            <label className="">Full Name: </label>
                            {isEditing ? 
                                <input className="border rounded-lg outline-none border-cyan-900" type="text" 
                                onChange={(e)=> updateUserProfile({...updateProfile, name:e.target.value})}/> 
                                : 
                                <span className="text-gray-500 ">{user?.name}</span>
                            }
                        </div>
                        <div className="flex flex-col">
                            <label className="">Email:</label>
                            <span className="text-gray-500 ">{user?.email}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="">Phone Number:</label>
                            {isEditing ? 
                                <input className="border border-cyan-900 outline-none rounded-lg" type="tel" 
                                onChange={(e)=> updateUserProfile({...updateProfile, phone:e.target.value})}/> 
                                : 
                                <span className="text-gray-500 ">{user?.phone}</span>
                            }
                        </div>
                        <div className="flex flex-col">
                            <label className="">Address:</label>
                            {isEditing ? 
                                <input className="border rounded-lg border-cyan-900 outline-none" type="text" 
                                onChange={(e)=> updateUserProfile({...updateProfile, address:e.target.value})}/> 
                                :  
                                <span className="text-gray-500 ">{user?.address ? user?.address : "N/A"}</span>
                            }
                        </div> 
                        {isEditing ?
                            <button className='mt-5 flex items-center gap-2 border rounded-md p-2 border-amber-400  justify-center font-bold text-amber-400 hover:bg-amber-400 hover:text-white' onClick={handleSaveClick}>Save</button>
                            :
                            <button className='mt-5 flex items-center gap-2 border rounded-md p-2 border-amber-400  justify-center font-bold text-amber-400 hover:bg-amber-400 hover:text-white' onClick={handleEditClick}><MdModeEditOutline className="fill-current"/>Edit Profile</button>
                        }
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Profile;
