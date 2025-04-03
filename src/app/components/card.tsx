import React from "react";
import Image from "next/image";

interface BusinessCardProps {
    name: string;
    department: string;
    address_1: string;
    address_2: string;
    email: string;
    telephone: string;
    phone: string;
    photo: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
    name,
    department,
    address_1,
    address_2,
    email,
    telephone,
    phone,
    photo,
}) => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-10">
            <div className="w-[90%] max-w-2xl border-2 border-gray-400 rounded-sm shadow-xl bg-white p-5">
                {/* Logo & Profile Image */}
                <div className="flex justify-between items-center">
                    <Image src="/hsbc_logo.png" alt="HSBC Logo" width={120} height={50} />
                    {/* <Image
            src={photo}
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full border-2 border-gray-400"
          /> */}
                </div>

                {/* Name & Department */}
                <div className="text-center mt-6">
                    <h2 className="text-3xl text-gray-900">{name}</h2>
                    <p className="text-xl text-gray-600">{department}</p>
                </div>

                {/* Divider */}
                <hr className="my-6 border-t-3 border-gray-200" />

                <div className="flex justify-center items-center">
                    <Image src="/qr_code.svg" alt="HSBC Logo" width={120} height={50} />
                </div>


                {/* Address */}
                <div className="text-center text-lg text-gray-900 mt-2">{address_1}</div>
                <div className="text-center text-lg text-gray-700">{address_2}</div>
                <div className="text-center">
                    <a href="https://www.hsbc.com" target="_blank" rel="noopener noreferrer"
                        className="text-center text-lg text-gray-700 hover:text-red-600">
                        www.hsbc.com
                    </a>
                </div>

                {/* Contact Info in a Row */}
                <div className="flex justify-center space-x-6 text-lg text-gray-800 mt-6">
                    <p>{email}</p>
                    <p>{telephone}</p>
                    <p>{phone}</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;
