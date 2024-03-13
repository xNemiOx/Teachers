import { InputHTMLAttributes } from "react";

type Props = {

} & InputHTMLAttributes<HTMLInputElement>

export default function UIinput(props: Props) {

    return (
        <input {...props} className='text-background py-3 px-2 font-semibold rounded-md h-14 transition bg-text z-10 placeholder:text-background'>
        </input>
    )
}