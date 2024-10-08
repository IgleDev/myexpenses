import { useState, useEffect } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import '../assets/styles/circular.css';
import { useTranslation } from "react-i18next"; 
import SectionInfo from "./SectionInfo";

const Section = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState(Math.floor(Math.random() * 100));
    const [text, setText] = useState("-");

    useEffect(() => {
        const handleTextonChange = () => {
            if (value <= 25) {
                setText("S");
            } else if (value > 25 && value <= 50) {
                setText("A");
            } else if (value > 50 && value <= 75) {
                setText("B");
            } else if (value > 75 && value <= 90) {
                setText("C");
            } else if(value >= 90){
                setText("D");
            } else {
                setText("-");
            }
        };

        setValue(value);
        handleTextonChange();
    }, [value]);

    return (
        <section className>
            <article className="shadow-stone-700 w-80 bg-white dark:bg-gray-700 rounded transition hover:-translate-y-1 hover:scale-100">
                <h1 className="text-center font-bold text-2xl text-white">{t("TitleStast")}</h1>
                <div className="w-[200px] h-[200px] my-10 mx-auto">
                    <CircularProgressbar value={value} text={text} counterClockwise={true}/>
                </div>
            <SectionInfo value={value}/>
            </article>
        </section>
    )
}

export default Section;