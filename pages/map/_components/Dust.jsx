
import { useState, useRef, useEffect }  from 'react';
import DustBlack  from '../../../public/img-dust-black.svg'
import DustPurple from '../../../public/img-dust-purple.svg'
import DustOrange from '../../../public/img-dust-orange.svg'
import DustGreen from '../../../public/img-dust-green.svg'
import DustWhite from '../../../public/img-dust-white.svg'
import Image from 'next/image';

const DustMapper = {
    1 : DustBlack,
    2 : DustPurple,
    3 : DustOrange,
    4 : DustGreen,
    5 : DustWhite
}


const Dust = ({ dustId }) => {
    return (
        <div>
            <Image src={DustMapper[dustId]} alt='dust-image'/>
        </div>
    )
}

export default Dust
