import React from "react";
import {BiWorld} from "react-icons/bi";

const ResourcesCard : React.FC = () => {
    return (
        <div className="w-full md:w-max bg-themeYellow rounded-xl shadow-md">
            <section className="p-8 flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-lg">choosingwisely.org</h3>
                    <a className="text-themeBlue font-medium" href="https://www.choosingwisely.org/patient-resources/allergy-tests/"><BiWorld className="text-2xl transition-all hover hover:text-themeOrange" /></a>
                </div>
                <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-lg">acaai.org</h3>
                    <a className="text-themeBlue font-medium" href="https://acaai.org/allergies/testing-diagnosis/"><BiWorld className="text-2xl transition-all hover hover:text-themeOrange" /></a>
                </div>
                <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-lg">Labcorp</h3>
                    <a className="text-themeBlue font-medium" href="https://www.labcorp.com/allergies"><BiWorld className="text-2xl transition-all hover hover:text-themeOrange"  /></a>
                </div>
            </section>
        </div>
    )
};

export default ResourcesCard;